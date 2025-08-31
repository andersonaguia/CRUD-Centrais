import axios, { AxiosError } from "axios";
import { AxiosErrorResponse } from "../types";

export const getAxiosErrorMessage = (error: unknown, defaultMessage: string): string => {
  if (axios.isAxiosError(error) && error.response?.data) {
    const errorData = error.response.data as AxiosErrorResponse;
    return errorData.message || defaultMessage;
  }
  return defaultMessage;
};

export const isAxiosError = (error: unknown): error is AxiosError<AxiosErrorResponse> => {
  return axios.isAxiosError(error);
}; 