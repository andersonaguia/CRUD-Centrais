"use client";

import { useEffect } from "react";
import { useCentralStore } from "../../../../stores/central.store";
import { Title } from "../title";
import { useTotalCentrals } from "../../../../api/centrals/useCentrals";

export const HeaderCounter = () => {
  const { totalCentrals, setTotalCentrals } = useCentralStore();

  const { data } = useTotalCentrals();

  useEffect(() => {
    if (data !== undefined) {
      setTotalCentrals(data);
    }
  }, [data, setTotalCentrals]);

  return (
    <Title.Root size="small">
      <Title.Text>Total de centrais cadastradas: {totalCentrals}</Title.Text>
    </Title.Root>
  );
};
