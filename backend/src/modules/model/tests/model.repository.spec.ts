import { Test, TestingModule } from '@nestjs/testing';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from 'src/modules/database/services/prisma.service';
import { ModelRepository } from '../repositories/model.repository';
import { Model } from '@prisma/client';

type PrismaServiceMock = DeepMockProxy<PrismaService>;

describe('ModelRepository', () => {
  let repository: ModelRepository;
  let prismaService: PrismaServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModelRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaService>())
      .compile();

    repository = module.get<ModelRepository>(ModelRepository);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('findAll', () => {
    it('should find all models', async () => {
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

      prismaService.model.findMany.mockResolvedValue(mockModels);

      const models = await repository.findAll();

      expect(prismaService.model.findMany).toHaveBeenCalled();

      expect(models).toEqual(mockModels);
    });
  });

  describe('findOneById', () => {
    it('should find one model by id', async () => {
      const mockModel: Model = {
        id: 1,
        name: 'Modelo A',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      prismaService.model.findUnique.mockResolvedValue(mockModel);

      const model = await repository.findOneById(1);

      expect(prismaService.model.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });

      expect(model).toEqual(mockModel);
    });

    it('should return null if model not found', async () => {
      prismaService.model.findUnique.mockResolvedValue(null);

      const model = await repository.findOneById(99);

      expect(prismaService.model.findUnique).toHaveBeenCalled();

      expect(model).toBeNull();
    });
  });
});
