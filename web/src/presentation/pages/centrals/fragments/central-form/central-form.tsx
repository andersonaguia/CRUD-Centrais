"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as s from "./styles/central-form.css";
import { useCreateCentral, useGetCentral, useUpdateCentral } from "../../../../../api/centrals/useCentrals";
import { useGetModels } from "../../../../../api/models/useModels";
import { useCentralStore } from "../../../../../stores/central.store";
import { centralSchema, CreateCentralFormSchema } from "../../../../../schemas/central.schema";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getAxiosErrorMessage } from "../../../../../api/utils/error-handler";
import { Title } from "@components/core/title";
import { Button } from "@components/core/button/button";

export const CentralForm = ({ centralId }: { centralId?: string }) => {
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
            toast.success("Central atualizada com sucesso!");
          },
          onError: (error) => {
            const errorMessage = getAxiosErrorMessage(
              error,
              "Ocorreu um erro ao tentar editar a central!"
            );
            toast.error(errorMessage);
          },
        }
      );
    } else {
      createCentralMutation.mutate(data, {
        onSuccess: () => {
          toast.success("Central cadastrada com sucesso!");
          reset();
          setTotalCentrals(totalCentrals + 1);
        },

        onError: (error) => {
          const errorMessage = getAxiosErrorMessage(
            error,
            "Ocorreu um erro ao tentar cadastrar a central!"
          );
          toast.error(errorMessage);
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
    <div className={s.containerPage}>
      <Title.Root size="large">
        <Title.Text>
          {centralData ? "Editar Central" : "Cadastro de Central"}
        </Title.Text>
      </Title.Root>
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
          <select
            id="modelId"
            className={s.formSelect}
            {...register("modelId")}
          >
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

        <Button
          type="submit"
          className={s.formButton}
          disabled={createCentralMutation.isPending}
        >
          {centralData ? "Atualizar" : "Cadastrar"}
        </Button>
      </form>
    </div>
  );
};
