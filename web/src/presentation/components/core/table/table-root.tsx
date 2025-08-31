import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TableRootProps } from "./types";
import * as s from "./styles/table.css";
import { ChevronLeftIcon } from "@components/icons/chevron-left";
import { ChevronRightIcon } from "@components/icons/chevron-right";
import { Button } from "../button/button";

export function TableRoot<TData>({
  columns,
  data,
  serverPagination,
}: TableRootProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={s.th}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={s.trHover}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={s.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {serverPagination && (
        <div className={s.pagination}>
          <div className={s.paginationInfo}>
            <span>
              Página {serverPagination.page} de{" "}
              {Math.ceil(serverPagination.total / serverPagination.limit)}
            </span>
            <div className={s.itemsPerPage}>
              <label htmlFor="itemsPerPage" className={s.itemsPerPageLabel}>
                Itens por página:
              </label>
              <select
                id="itemsPerPage"
                className={s.itemsPerPageSelect}
                value={serverPagination.limit}
                onChange={(e) => serverPagination.onLimitChange(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>
          <div className={s.navigation}>
            <Button
              className={s.button}
              disabled={serverPagination.page === 1}
              onClick={() => serverPagination.onPageChange(serverPagination.page - 1)}
              icon={ChevronLeftIcon}
            >
              {" "}
            </Button>
            <Button
              className={s.button}
              disabled={
                serverPagination.page >=
                Math.ceil(serverPagination.total / serverPagination.limit)
              }
              onClick={() => serverPagination.onPageChange(serverPagination.page + 1)}
              icon={ChevronRightIcon}
            >
              {" "}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}