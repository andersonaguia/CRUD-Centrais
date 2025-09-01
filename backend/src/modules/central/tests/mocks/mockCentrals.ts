import { Central, Model } from '@prisma/client';
import { CentralWithModel } from '../../types/central.type';
import { PaginationDto } from '../../dto/pagination.dto';
import { CentralDataDto } from '../../dto/central-data.dto';
import { CentralFilterDto } from '../../dto/central-filter.dto';
import { mockModelDto } from 'src/modules/model/tests/mocks/mockModels';

export const MOCK_CENTRAL_ID = 1;

export const mockCentralWithModel: CentralWithModel = {
  id: 1,
  name: 'Central Teste',
  mac: 'AA:BB:CC:DD:EE:FF',
  modelId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
  model: mockModelDto,
};

export const mockCreateCentralDto = {
  name: 'Central Teste',
  mac: 'AA:BB:CC:DD:EE:FF',
  modelId: 1,
};

export const mockCreatedCentral: Central = {
  id: 1,
  name: 'Central Teste',
  mac: 'AA:BB:CC:DD:EE:FF',
  modelId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

export const mockCentrals: CentralWithModel[] = [
  mockCentralWithModel,
  {
    id: 2,
    name: 'Central 2',
    mac: 'AA:BB:CC:DD:EE:F2',
    modelId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    model: mockModelDto,
  },
];

export const mockUpdateDto = {
  name: 'Central 1',
  mac: 'CC:DD:EE:FF:11:22',
  modelId: 2,
};

export const mockUpdatedCentral: CentralWithModel = {
  id: MOCK_CENTRAL_ID,
  name: 'Central Nova',
  mac: 'CC:DD:EE:FF:11:22',
  modelId: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
  model: mockModelDto,
};

export const mockPaginationDto = new PaginationDto();
mockPaginationDto.page = 1;
mockPaginationDto.limit = 10;
mockPaginationDto.orderBy = 'id';
mockPaginationDto.sortOrder = 'asc';

export const mockUpdatedCentralWithModel: CentralWithModel = {
  ...mockCentralWithModel,
  name: 'Central 1',
  mac: 'CC:DD:EE:FF:11:22',
  modelId: 2,
  model: mockModelDto,
};

export const mockCentral: Central = {
  id: 1,
  name: 'Central Teste',
  mac: 'AA:BB:CC:DD:EE:FF',
  modelId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

export const mockCentralDataDto: CentralDataDto = {
  id: 1,
  name: 'Central Teste',
  mac: 'AA:BB:CC:DD:EE:FF',
  model: mockModelDto,
};

export const mockFilters: CentralFilterDto = {
  name: 'Central 1',
  mac: 'AA:BB:CC:DD:EE:F1',
  modelId: 1,
};

export const mockResult = { total: 1, data: [mockCentralDataDto] };
