import { Model } from '@prisma/client';
import { ModelDto } from '../../dto/model.dto';

export const mockModel: Model = {
  id: 1,
  name: 'Modelo A',
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

export const mockModelDto: ModelDto = { id: 1, name: 'Modelo A' };

export const mockModelsDto: ModelDto[] = [
  mockModel,
  { id: 2, name: 'Modelo B' },
];
