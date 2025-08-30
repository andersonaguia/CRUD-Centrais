import { FC } from "react";
import * as s from "../modal/styles/modal.css";
import { FeedbackProps } from "./types";
import { useModal } from "../modal/contexts/modal-context";
import { Button } from "../button/button";
import { Title } from "../title";

export const Feedback: FC<FeedbackProps> = ({
  message,
  onConfirm,
  isError = false,
}) => {
  const { closeModal } = useModal();

  const handleConfirm = () => {
    closeModal();
    onConfirm?.();
  };

  return (
    <div>
      <Title.Root size="medium">{message}</Title.Root>
      <div className={s.modalActions}>
        <Button onClick={handleConfirm}>{isError ? "Fechar" : "Ok"}</Button>
      </div>
    </div>
  );
};
