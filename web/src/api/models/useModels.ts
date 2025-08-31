import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Model } from './types';
import { API_URL } from '../../common/constants';

export const useGetModels = () => {
  return useQuery<Model[]>({
    queryKey: ['models'],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/models`);
      return data;
    },
  });
};