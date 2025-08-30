"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as s from "./styles/central-form.css";
import { useGetModels } from "../../../../api/models/useModels";
import { useCreateCentral } from "../../../../api/centrals/useCentrals";
import {
  centralSchema,
  CreateCentralFormSchema,
} from "../../../../schemas/central.schema";
import { Title } from "../title";
import axios from "axios";
import { useModal } from "../modal/contexts/modal-context";
import { Feedback } from "../feedback/feedback";

export const CentralForm = () => {
  const { openModal } = useModal();
  const createCentralMutation = useCreateCentral();
  const { data: models, isLoading, error } = useGetModels();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateCentralFormSchema>({
    resolver: zodResolver(centralSchema),
  });

  const onSubmit = (data: CreateCentralFormSchema) => {
    createCentralMutation.mutate(data, {
      onSuccess: () => {
        openModal(<Feedback message="Central cadastrada com sucesso!" />);
        reset();
      },

      onError: (error) => {
        let errorMessage = "Ocorreu um erro ao tentar cadastrar a central!";
        if (axios.isAxiosError(error) && error.response) {
          errorMessage = `${error.response.data.message || error.message}`;
        }

        openModal(<Feedback message={errorMessage} isError={true} />);
      },
    });
  };

  if (isLoading) {
    return <p>Carregando modelos...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os modelos.</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.formWrapper}>
      <div className={s.formTitle}>
        <Title.Root size="medium">
          <Title.Text>Nova Central</Title.Text>
        </Title.Root>
      </div>

      <div className={s.formField}>
        <label htmlFor="name" className={s.formLabel}>
          Nome
        </label>
        <input id="name" className={s.formInput} {...register("name")} />
        {errors.name && (
          <span className={s.errorMessage}>{errors.name.message}</span>
        )}
      </div>

      <div className={s.formField}>
        <label htmlFor="mac" className={s.formLabel}>
          Endereço MAC
        </label>
        <input id="mac" className={s.formInput} {...register("mac")} />
        {errors.mac && (
          <span className={s.errorMessage}>{errors.mac.message}</span>
        )}
      </div>

      <div className={s.formField}>
        <label htmlFor="modelId" className={s.formLabel}>
          Modelo
        </label>
        <select id="modelId" className={s.formSelect} {...register("modelId")}>
          <option value="">Selecione um modelo</option>
          {models?.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        {errors.modelId && (
          <span className={s.errorMessage}>{errors.modelId.message}</span>
        )}
      </div>

      <button
        type="submit"
        className={s.formButton}
        disabled={createCentralMutation.isPending}
      >
        Cadastrar Central
      </button>
    </form>
  );
};
