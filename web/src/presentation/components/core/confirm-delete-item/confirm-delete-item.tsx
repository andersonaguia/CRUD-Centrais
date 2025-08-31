"use client";

import { FC } from "react";
import * as s from "./styles/confirm-delete-item.css";
import { ConfirmDeleteItemProps } from "./types";
import { useModal } from "@components/core/modal/contexts/modal-context";
import { Button } from "@components/core/button/button";
import { useDeleteCentral } from "../../../../api/centrals/useCentrals";
import { Container } from "../container";
import { useCentralStore } from "../../../../store/central.store";
import { getAxiosErrorMessage } from "../../../../api/utils/error-handler";
import { toast } from "react-toastify";

export const ConfirmDeleteItem: FC<ConfirmDeleteItemProps> = ({
  centralId,
  centralName,
}) => {
  const { closeModal } = useModal();
  const deleteCentralMutation = useDeleteCentral();
  const { totalCentrals, setTotalCentrals } = useCentralStore();

  const handleConfirmDelete = () => {
    deleteCentralMutation.mutate(centralId, {
      onSuccess: () => {
        setTotalCentrals(totalCentrals - 1);
        toast.success(`Central "${centralName}" excluída com sucesso!`);
      },
      onError: (error) => {
        const errorMessage = getAxiosErrorMessage(
          error,
          "Ocorreu um erro ao tentar excluir a central!"
        );
        toast.error(errorMessage);
      },
    });
  };

  return (
    <Container aspect="primary" status="attention">
      <p className={s.message}>
        Tem certeza que deseja excluir a central {centralName}?
      </p>
      <div className={s.actions}>
        <Button onClick={closeModal} className={s.backButton}>
          Voltar
        </Button>
        <Button onClick={handleConfirmDelete} className={s.confirmButton}>
          Confirmar
        </Button>
      </div>
    </Container>
  );
};
