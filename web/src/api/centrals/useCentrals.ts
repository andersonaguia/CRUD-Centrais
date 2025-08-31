import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import {
  Central,
  CreateCentralDto,
  UpdateCentralDto,
  GetCentralsParams,
} from "./types";
import { AxiosErrorResponse } from "../types";
import { API_URL } from "../../common/constants";

export const useGetCentrals = (params: GetCentralsParams) => {
  const urlParams = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
    ...(params.name ? { name: params.name } : {}),
    ...(params.mac ? { mac: params.mac } : {}),
    ...(params.modelId ? { modelId: params.modelId.toString() } : {}),
  });

  return useQuery<
    { data: Central[]; total: number },
    AxiosError<AxiosErrorResponse>
  >({
    queryKey: ["centrals", params],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/centrals?${urlParams}`);
      return data;
    },
  });
};

export const useCreateCentral = () => {
  const queryClient = useQueryClient();
  return useMutation<Central, AxiosError<AxiosErrorResponse>, CreateCentralDto>(
    {
      mutationFn: async (newCentral) => {
        const { data } = await axios.post(`${API_URL}/centrals`, newCentral);
        return data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["centrals"] });
      },
    }
  );
};

export const useDeleteCentral = () => {
  const queryClient = useQueryClient();
  return useMutation<void, AxiosError<AxiosErrorResponse>, string>({
    mutationFn: async (id) => {
      await axios.delete(`${API_URL}/centrals/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centrals"] });
    },
  });
};

export const useUpdateCentral = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Central,
    AxiosError<AxiosErrorResponse>,
    { id: string; data: UpdateCentralDto }
  >({
    mutationFn: async ({ id, data }) => {
      const { data: updatedCentral } = await axios.put(
        `${API_URL}/centrals/${id}`,
        data
      );
      return updatedCentral;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centrals"] });
      queryClient.invalidateQueries({ queryKey: ["central", ""] });
    },
  });
};

export const useGetCentral = (id: string) => {
  return useQuery<Central, AxiosError<AxiosErrorResponse>>({
    queryKey: ["central", id],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/centrals/${id}`);
      return data;
    },
    enabled: !!id,
  });
};

export const useTotalCentrals = () => {
  return useQuery<number, AxiosError<AxiosErrorResponse>>({
    queryKey: ["totalCentrals"],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/centrals/count`);
      return data.total;
    },
  });
};
