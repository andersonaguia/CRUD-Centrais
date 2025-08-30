import { Model } from "../models/types";

export interface Central  {
  id: string;
  name: string;
  mac: string;
  model: Model;
};

export interface GetCentralsParams {
  page: number;
  limit: number;
  name?: string;
  mac?: string;
  modelId?: number;
}

export interface CreateCentralDto {
  name: string;
  mac: string;
  modelId: number; 
};

