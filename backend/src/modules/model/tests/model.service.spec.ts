import { Test, TestingModule } from '@nestjs/testing';
import { ModelRepository } from '../repositories/model.repository';
import { Model } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { ModelService } from '../services/model.service';
import { ModelDto } from '../dto/model.dto';
import { mockModel } from './mocks/mockModels';

type ModelRepositoryMock = DeepMockProxy<ModelRepository>;

describe('ModelService', () => {
  let service: ModelService;
  let repository: ModelRepositoryMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModelService, ModelRepository],
    })
      .overrideProvider(ModelRepository)
      .useValue(mockDeep<ModelRepository>())
      .compile();

    service = module.get<ModelService>(ModelService);
    repository = module.get(ModelRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should get all models and map them to DTO', async () => {
      const mockModels: Model[] = [
        {
          id: 1,
          name: 'Modelo A',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
        {
          id: 2,
          name: 'Modelo B',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
      ];

      repository.findAll.mockResolvedValue(mockModels);

      const models: ModelDto[] = await service.getAll();

      expect(repository.findAll).toHaveBeenCalled();

      expect(models).toEqual([
        { id: 1, name: 'Modelo A' },
        { id: 2, name: 'Modelo B' },
      ]);
    });
  });

  describe('findOneById', () => {
    it('should find one model by id', async () => {
      repository.findOneById.mockResolvedValue(mockModel);

      const model = await service.findOneById(1);

      expect(repository.findOneById).toHaveBeenCalledWith(1);

      expect(model).toEqual(mockModel);
    });

    it('should return null if model not found', async () => {
      repository.findOneById.mockResolvedValue(null);

      const model = await service.findOneById(99);

      expect(repository.findOneById).toHaveBeenCalledWith(99);

      expect(model).toBeNull();
    });
  });
});
