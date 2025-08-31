import { Test, TestingModule } from '@nestjs/testing';
import { Central, Prisma } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { CentralFilterDto } from '../dto/central-filter.dto';
import { HttpStatus } from '@nestjs/common';
import { Messages } from '../../../common/messages';
import { CentralRepository } from '../repositories/central.repository';
import { PrismaService } from 'src/modules/database/services/prisma.service';
import {
  MOCK_CENTRAL_ID,
  mockCentrals,
  mockCentralWithModel,
  mockCreateCentralDto,
  mockCreatedCentral,
  mockFilters,
  mockUpdatedCentral,
  mockUpdateDto,
} from './mocks/mockCentrals';

type PrismaServiceMock = DeepMockProxy<PrismaService>;

describe('CentralRepository', () => {
  let repository: CentralRepository;
  let prismaService: PrismaServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentralRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaService>())
      .compile();

    repository = module.get<CentralRepository>(CentralRepository);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('create', () => {
    it('should create a new central', async () => {
      prismaService.central.create.mockResolvedValue(mockCreatedCentral);

      const result = await repository.create(mockCreateCentralDto);

      expect(prismaService.central.create).toHaveBeenCalledWith({
        data: mockCreateCentralDto,
      });

      expect(result).toEqual(mockCreatedCentral);
    });

    it('should throw CONFLICT error on MAC duplicate', async () => {
      const error = new Prisma.PrismaClientKnownRequestError(
        'MAC already exists',
        {
          code: 'P2002',
          clientVersion: 'test-version',
          meta: { target: ['mac'] },
        },
      );
      prismaService.central.create.mockRejectedValue(error);

      await expect(repository.create(mockCreateCentralDto)).rejects.toEqual({
        code: HttpStatus.CONFLICT,
        message: `${Messages.Central.http.MAC_NOT_UNIQUE} ${mockCreateCentralDto.mac}`,
      });
    });
  });

  describe('findOneById', () => {
    it('should find a central by id', async () => {
      prismaService.central.findFirst.mockResolvedValue(mockCentralWithModel);

      const result = await repository.findOneById(MOCK_CENTRAL_ID);

      expect(prismaService.central.findFirst).toHaveBeenCalledWith({
        where: { id: MOCK_CENTRAL_ID, deletedAt: null },
        include: { model: { select: { name: true } } },
      });
      expect(result).toEqual(mockCentralWithModel);
    });

    it('should return null if central is not found', async () => {
      prismaService.central.findFirst.mockResolvedValue(null);

      const result = await repository.findOneById(999);
      expect(result).toBeNull();
    });
  });

  describe('deleteById', () => {
    it('should delete a central by id', async () => {
      prismaService.central.delete.mockResolvedValue({} as Central);

      await expect(
        repository.deleteById(MOCK_CENTRAL_ID),
      ).resolves.not.toThrow();
      expect(prismaService.central.delete).toHaveBeenCalledWith({
        where: { id: MOCK_CENTRAL_ID },
      });
    });

    it('should throw NOT_FOUND error if central not found', async () => {
      const error = new Prisma.PrismaClientKnownRequestError(
        'Record not found',
        {
          code: 'P2025',
          clientVersion: 'test-version',
        },
      );
      prismaService.central.delete.mockRejectedValue(error);

      await expect(repository.deleteById(999)).rejects.toEqual({
        code: HttpStatus.NOT_FOUND,
        message: `${Messages.Central.http.ID_NOT_FOUND_ERROR} 999`,
      });
    });
  });

  describe('findAll', () => {
    it('should find all centrals with default pagination', async () => {
      prismaService.central.findMany.mockResolvedValue(mockCentrals);

      const result = await repository.findAll(0, 10, 'id', 'asc', {});

      expect(prismaService.central.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 10,
        where: { deletedAt: null },
        orderBy: { id: 'asc' },
        include: { model: { select: { id: true, name: true } } },
      });
      expect(result).toEqual(mockCentrals);
    });

    it('should find centrals with filters', async () => {
      const filteredCentrals = [mockCentrals[0]];
      prismaService.central.findMany.mockResolvedValue(filteredCentrals);

      const result = await repository.findAll(0, 10, 'id', 'asc', mockFilters);

      expect(prismaService.central.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 10,
        where: {
          deletedAt: null,
          name: { contains: 'Central 1' },
          mac: { contains: 'AA:BB:CC:DD:EE:F1' },
          modelId: 1,
        },
        orderBy: { id: 'asc' },
        include: { model: { select: { id: true, name: true } } },
      });
      expect(result).toEqual(filteredCentrals);
    });
  });

  describe('countAll', () => {
    it('should count all centrals', async () => {
      prismaService.central.count.mockResolvedValue(5);
      const result = await repository.countAll({});
      expect(prismaService.central.count).toHaveBeenCalledWith({
        where: { deletedAt: null },
      });
      expect(result).toBe(5);
    });

    it('should count centrals with filters', async () => {
      prismaService.central.count.mockResolvedValue(1);
      const filters: CentralFilterDto = { mac: mockFilters.mac };
      const result = await repository.countAll(filters);
      expect(prismaService.central.count).toHaveBeenCalledWith({
        where: { deletedAt: null, mac: { contains: mockFilters.mac } },
      });
      expect(result).toBe(1);
    });
  });

  describe('update', () => {
    it('should update a central successfully', async () => {
      prismaService.central.update.mockResolvedValue(mockUpdatedCentral);
      const result = await repository.update(MOCK_CENTRAL_ID, mockUpdateDto);
      expect(prismaService.central.update).toHaveBeenCalledWith({
        where: { id: MOCK_CENTRAL_ID },
        data: {
          name: mockUpdateDto.name,
          mac: mockUpdateDto.mac,
          modelId: mockUpdateDto.modelId,
          updatedAt: expect.any(Date),
        },
        include: { model: { select: { id: true, name: true } } },
      });
      expect(result).toEqual(mockUpdatedCentral);
    });

    it('should throw CONFLICT error on MAC duplicate', async () => {
      const error = new Prisma.PrismaClientKnownRequestError('MAC conflict', {
        code: 'P2002',
        clientVersion: 'test-version',
      });
      prismaService.central.update.mockRejectedValue(error);
      await expect(
        repository.update(MOCK_CENTRAL_ID, mockUpdateDto),
      ).rejects.toEqual({
        code: HttpStatus.CONFLICT,
        message: `${Messages.Central.http.MAC_NOT_UNIQUE} ${mockUpdateDto.mac}`,
      });
    });

    it('should throw NOT_FOUND error if central not found', async () => {
      const error = new Prisma.PrismaClientKnownRequestError(
        'Record not found',
        {
          code: 'P2025',
          clientVersion: 'test-version',
        },
      );
      prismaService.central.update.mockRejectedValue(error);
      await expect(repository.update(999, mockUpdateDto)).rejects.toEqual({
        code: HttpStatus.NOT_FOUND,
        message: `${Messages.Central.http.ID_NOT_FOUND_ERROR} 999`,
      });
    });
  });
});
