import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Central, GetCentralsParams } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useGetCentrals = (params: GetCentralsParams) => {
  const urlParams = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
    ...(params.name ? { name: params.name } : {}),
    ...(params.mac ? { mac: params.mac } : {}),
    ...(params.modelId ? { modelId: params.modelId.toString() } : {}),
  });

  return useQuery<{ data: Central[], total: number }>({
    queryKey: ['centrals', params], 
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/centrals?${urlParams}`);
      return data;
    },
  });
};

