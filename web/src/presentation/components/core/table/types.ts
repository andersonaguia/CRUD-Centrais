import { ColumnDef } from "@tanstack/react-table";

export interface TableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
};

export interface ServerPaginationProps {
  page: number;
  limit: number;
  total: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
};

export interface TableRootProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  serverPagination?: ServerPaginationProps;
};

export interface TableActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export interface TableFiltersProps {
  setFilters: (filters: {
    name?: string;
    mac?: string;
    modelId?: number;
  }) => void;
}