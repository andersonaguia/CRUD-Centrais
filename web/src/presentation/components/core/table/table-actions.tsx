"use client";

import React from "react";
import { useRouter } from "next/navigation";
import * as s from "./styles/table.css";
import { Central } from "../../../../api/centrals/types";
import { useModal } from "../modal/contexts/modal-context";
import { ConfirmDeleteItem } from "../confirm-delete-item/confirm-delete-item";
import { EditButton } from "@components/core/table/edit-button";
import { Button } from "../button/button";
import { TrashIcon } from "@components/icons/trash";
interface TableActionsProps {
  central: Central;
}

export const TableActions = ({ central }: TableActionsProps) => {
  const router = useRouter();
  const { openModal } = useModal();

  const handleEdit = () => {
    router.push(`/centrals/${central.id}/edit`);
  };

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
