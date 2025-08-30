"use client";

import { useState } from "react";
import { Title } from "@components/core/title";
import * as styles from "./styles/centrals.css";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "@components/core/table";

import { useGetCentrals } from "../../../api/centrals/useCentrals";
import { Central } from "../../../api/centrals/types";
import { TableActions } from "@components/core/table/table-actions";

export const CentralsPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [nameFilter, setNameFilter] = useState("");
  const [macFilter, setMacFilter] = useState("");
  const [modelIdFilter, setModelIdFilter] = useState<number | undefined>(
    undefined
  );

  const { data, isLoading, error } = useGetCentrals({
    page,
    limit,
    name: nameFilter,
    mac: macFilter,
    modelId: modelIdFilter,
  });

  const columns: ColumnDef<Central>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Nome",
    },
    {
      accessorKey: "mac",
      header: "MAC",
    },
    {
      accessorKey: "model.name",
      header: "Modelo",
      cell: ({ row }) => row.original.model.name,
    },
    {
      id: "actions",
      header: "Ações",
      cell: ({ row }) => {
        return (
          <TableActions
            onEdit={() => console.log("Editar central:", row.original)}
            onDelete={() => console.log("Excluir central:", row.original)}
          />
        );
      },
    },
  ];

  if (error) {
    return <div>Ocorreu um erro: {error.message}</div>;
  }

  return (
    <div className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>Centrais cadastradas</Title.Text>
      </Title.Root>

      <div>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <Table.Root
            columns={columns}
            data={data?.data || []}
            serverPagination={{
              page,
              limit,
              total: data?.total || 0,
              onPageChange: setPage,
              onLimitChange: setLimit,
            }}
          />
        )}
      </div>
    </div>
  );
};
