"use client";

import { useState } from "react";
import * as s from "./styles/table.css";
import { Button } from "../button/button";
import { useGetModels } from "../../../../api/models/useModels";
import { TableFiltersProps } from "./types";

export const TableFilters = ({ setFilters }: TableFiltersProps) => {
  const [nameFilter, setNameFilter] = useState("");
  const [macFilter, setMacFilter] = useState("");
  const [modelIdFilter, setModelIdFilter] = useState<number | undefined>(
    undefined
  );

  const { data: modelsData, isLoading: modelsLoading } = useGetModels();

  const handleClearFilters = () => {
    setNameFilter("");
    setMacFilter("");
    setModelIdFilter(undefined);
    setFilters({ name: "", mac: "", modelId: undefined });
  };

  const handleNameChange = (value: string) => {
    setNameFilter(value);
    setFilters({ name: value, mac: macFilter, modelId: modelIdFilter });
  };

  const handleMacChange = (value: string) => {
    setMacFilter(value);
    setFilters({ name: nameFilter, mac: value, modelId: modelIdFilter });
  };

  const handleModelIdChange = (value: number | undefined) => {
    setModelIdFilter(value);
    setFilters({ name: nameFilter, mac: macFilter, modelId: value });
  };

  return (
    <div className={s.filtersContainer}>
      <div className={s.filterItems}>
        <label htmlFor="nameFilter" className={s.filterLabel}>
          Filtrar por nome:
        </label>
        <input
          id="nameFilter"
          type="text"
          placeholder="Nome da central"
          className={s.filterInput}
          value={nameFilter}
          onChange={(e) => handleNameChange(e.target.value)}
        />
      </div>

      <div className={s.filterItems}>
        <label htmlFor="macFilter" className={s.filterLabel}>
          Filtrar por MAC:
        </label>
        <input
          id="macFilter"
          type="text"
          placeholder="Endereço MAC"
          className={s.filterInput}
          value={macFilter}
          onChange={(e) => handleMacChange(e.target.value)}
        />
      </div>

      <div className={s.filterItems}>
        <label htmlFor="modelIdFilter" className={s.filterLabel}>
          Filtrar por modelo:
        </label>
        <select
          id="modelIdFilter"
          className={s.selectFilter}
          value={modelIdFilter || ""}
          onChange={(e) => {
            const value = e.target.value;
            const modelId = value === "" ? undefined : Number(value);
            handleModelIdChange(modelId);
          }}
        >
          <option value="">Todos</option>
          {modelsLoading ? (
            <option disabled>Carregando...</option>
          ) : (
            modelsData?.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))
          )}
        </select>
      </div>

      <Button onClick={handleClearFilters} className={s.clearFiltersButton}>
        Limpar Filtros
      </Button>
    </div>
  );
};
