"use client";

import React from "react";
import * as s from "./styles/table.css";
import { Central } from "../../../../api/centrals/types";
import { useModal } from "../modal/contexts/modal-context";
import { EditButton } from "@components/core/table/edit-button";
import { Button } from "../button/button";
import { TrashIcon } from "@components/icons/trash";
import { ConfirmDeleteItem } from "@pages/centrals/fragments/confirm-delete-item/confirm-delete-item";
interface TableActionsProps {
  central: Central;
}

export const TableActions = ({ central }: TableActionsProps) => {
  const { openModal } = useModal();

  const handleDelete = () => {
    openModal(
      <ConfirmDeleteItem centralId={central.id} centralName={central.name} />
    );
  };

  return (
    <div className={s.actionsContainer}>
      <EditButton central={central} />
      <Button onClick={handleDelete} icon={TrashIcon} className={s.deleteButton} />
    </div>
  );
};
