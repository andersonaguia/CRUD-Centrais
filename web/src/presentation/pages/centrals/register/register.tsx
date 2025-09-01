"use client";

import * as styles from "../styles/centrals.css";
import { useGetModels } from "../../../../api/models/useModels";
import { CentralForm } from "../fragments/central-form/central-form";

export const RegisterPage = () => {
  const { isLoading, error } = useGetModels();

  if (isLoading) {
    return <div>Carregando formulário...</div>;
  }
  
  if (error) {
    return <div>Ocorreu um erro ao carregar os dados.</div>;
  }

  return (
    <div className={styles.containerPage}>      
        <CentralForm/>      
    </div>
  );
};