"use client";

import { FC } from "react";
import axios from "axios";
import * as s from "./styles/confirm-delete-item.css";
import { ConfirmDeleteItemProps } from "./types";
import { useModal } from "@components/core/modal/contexts/modal-context";
import { Feedback } from "@components/core/feedback/feedback";
import { Button } from "@components/core/button/button";
import { useDeleteCentral } from "../../../../api/centrals/useCentrals";
import { Container } from "../container";
import { useCentralStore } from "../../../../store/central.store";

export const ConfirmDeleteItem: FC<ConfirmDeleteItemProps> = ({
  centralId,
  centralName,
}) => {
  const { openModal, closeModal } = useModal();
  const deleteCentralMutation = useDeleteCentral();
  const { totalCentrals, setTotalCentrals } = useCentralStore();

  const handleConfirmDelete = () => {
    deleteCentralMutation.mutate(centralId, {
      onSuccess: () => {
        setTotalCentrals(totalCentrals - 1);
        openModal(
          <Feedback
            message={`Central "${centralName}" deletada com sucesso!`}
          />
        );
      },
      onError: (error) => {
        let errorMessage = "Ocorreu um erro ao tentar deletar a central!";
        if (axios.isAxiosError(error) && error.response) {
          errorMessage = `${error.response.data.message || error.message}`;
        }
        openModal(<Feedback message={errorMessage} isError={true} />);
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
