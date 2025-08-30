import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TableRootProps } from "./types";
import * as s from "./styles/table.css";

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
          <span>
            Página {serverPagination.page} de{" "}
            {Math.ceil(serverPagination.total / serverPagination.limit)}
          </span>
          <div>
            <button
              className={s.button}
              disabled={serverPagination.page === 1}
              onClick={() => serverPagination.onPageChange(serverPagination.page - 1)}
            >
              {"<"}
            </button>
            <button
              className={s.button}
              disabled={
                serverPagination.page >=
                Math.ceil(serverPagination.total / serverPagination.limit)
              }
              onClick={() => serverPagination.onPageChange(serverPagination.page + 1)}
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}