import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Model } from './types';
import { API_URL } from '../../common/constants';
import { AxiosErrorResponse } from '../types';

export const useGetModels = () => {
  return useQuery<Model[], AxiosError<AxiosErrorResponse>>({
    queryKey: ['models'],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/models`);
      return data;
    },
  });
};