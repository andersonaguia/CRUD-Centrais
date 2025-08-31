"use client";

import { useRouter } from "next/navigation";
import { Button } from "../button/button";
import { FC } from "react";
import { Central } from "../../../../api/centrals/types";
import { EditIcon } from "@components/icons/edit-item";
import * as s from "./styles/table.css";

interface EditButtonProps {
  central: Central;
}

export const EditButton: FC<EditButtonProps> = ({ central }) => {
  const router = useRouter();

  const handleEditCentral = () => {
    router.push(`/centrais/${central.id}/editar`);
  };

  return (
    <Button onClick={handleEditCentral} icon={EditIcon} className={s.editButton}/>
  );
};
