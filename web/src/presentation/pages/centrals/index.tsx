"use client";

import { useState } from "react";
import { Title } from "@components/core/title";
import * as styles from "./styles/centrals.css";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "@components/core/table";
import { useGetCentrals } from "../../../api/centrals/useCentrals";
import { Central } from "../../../api/centrals/types";
import { TableActions } from "@components/core/table/table-actions";
import { NewCentralButton } from "@components/core/new-central/new-central";
import { useCentralStore } from "../../../store/central.store";
import { TableFilters } from "@components/core/table/table-filters";

export const CentralsPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filters, setFilters] = useState({
    name: "",
    mac: "",
    modelId: undefined as number | undefined,
  });

  const { data, isLoading, error } = useGetCentrals({
    page,
    limit,
    name: filters.name,
    mac: filters.mac,
    modelId: filters.modelId,
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
        return <TableActions central={row.original} />;
      },
    },
  ];

  if (error) {
    return <div>Ocorreu um erro: {error.message}</div>;
  }

  return (
    <div className={styles.containerPage}>
      <div className={styles.headerContainer}>
        <Title.Root size="medium">
          <Title.Text>Centrais cadastradas</Title.Text>
        </Title.Root>
        <NewCentralButton />
      </div>
      <TableFilters setFilters={setFilters} />

      <div className={styles.tableContainer}>
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
