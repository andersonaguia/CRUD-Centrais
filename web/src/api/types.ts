export interface ErrorResponse {
  statusCode: number;
  message: string;
}

export interface AxiosErrorResponse {
  message: string;
  statusCode?: number;
  error?: string;
}

export interface AxiosErrorData {
  data: AxiosErrorResponse;
  status: number;
  statusText: string;
}

export type AxiosErrorWithResponse = {
  response: AxiosErrorData;
  isAxiosError: boolean;
  message: string;
};
