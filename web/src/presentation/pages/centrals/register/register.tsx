"use client";

import { Title } from "@components/core/title";
import * as styles from "../styles/centrals.css";
import { CentralForm } from "@components/core/central-form/central-form";
import { useGetModels } from "../../../../api/models/useModels";

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
      <Title.Root size="medium">
        <Title.Text>Cadastro de central</Title.Text>
      </Title.Root>

      <div>
        <CentralForm/>
      </div>
    </div>
  );
};