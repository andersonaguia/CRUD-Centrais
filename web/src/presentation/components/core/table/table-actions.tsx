import React from 'react';
import { TableActionsProps } from './types';
import * as s from "./styles/table.css";

export const TableActions = ({ onEdit, onDelete }: TableActionsProps) => {
  return (
    <div className={s.actionsContainer}>
      <button className={s.actionButton} onClick={onEdit}>Editar</button>
      <button className={s.actionButton} onClick={onDelete}>Excluir</button>
    </div>
  );
};