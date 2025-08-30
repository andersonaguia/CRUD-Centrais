"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as s from "./styles/central-form.css";
import { useGetModels } from "../../../../api/models/useModels";
import {
  useCreateCentral,
  useGetCentral,
  useUpdateCentral,
} from "../../../../api/centrals/useCentrals";
import {
  centralSchema,
  CreateCentralFormSchema,
} from "../../../../schemas/central.schema";
import { Title } from "../title";
import axios from "axios";
import { useModal } from "../modal/contexts/modal-context";
import { Feedback } from "../feedback/feedback";
import { useEffect } from "react";
import { useCentralStore } from "../../../../store/central.store";

export const CentralForm = ({ centralId }: { centralId?: string }) => {
  const { openModal } = useModal();
  const createCentralMutation = useCreateCentral();
  const updateCentralMutation = useUpdateCentral();
  const {
    data: models,
    isLoading: isLoadingModels,
    error: modelsError,
  } = useGetModels();
  const {
    data: centralData,
    isLoading: isLoadingCentral,
    error: centralError,
  } = useGetCentral(centralId || "");

  const { totalCentrals, setTotalCentrals } = useCentralStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CreateCentralFormSchema>({
    resolver: zodResolver(centralSchema),
  });

  useEffect(() => {
    if (centralData) {
      setValue("name", centralData.name);
      setValue("mac", centralData.mac);
      setValue("modelId", centralData.model.id);
    }
  }, [centralData, reset]);

  const onSubmit = (data: CreateCentralFormSchema) => {
    if (centralId) {
      updateCentralMutation.mutate(
        { id: centralId, data },
        {
          onSuccess: () => {
            openModal(<Feedback message="Central atualizada com sucesso!" />);
          },
          onError: (error) => {
            let errorMessage = "Ocorreu um erro ao tentar editar a central!";
            if (axios.isAxiosError(error) && error.response) {
              errorMessage = `${error.response.data.message || error.message}`;
            }

            openModal(<Feedback message={errorMessage} isError={true} />);
          },
        }
      );
    } else {
      createCentralMutation.mutate(data, {
        onSuccess: () => {
          openModal(<Feedback message="Central cadastrada com sucesso!" />);
          reset();
          setTotalCentrals(totalCentrals + 1);
        },

        onError: (error) => {
          let errorMessage = "Ocorreu um erro ao tentar cadastrar a central!";
          if (axios.isAxiosError(error) && error.response) {
            errorMessage = `${error.response.data.message || error.message}`;
          }

          openModal(<Feedback message={errorMessage} isError={true} />);
        },
      });
    }
  };

  const isLoading = isLoadingModels || (centralId && isLoadingCentral);
  const error = modelsError || centralError;

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
          <Title.Text>
            {centralData ? centralData.name : "Nova Central"}
          </Title.Text>
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
        {centralData ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
};
