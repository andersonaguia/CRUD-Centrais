import { Test, TestingModule } from '@nestjs/testing';
import { CentralController } from '../controllers/central.controller';
import { CentralService } from '../services/central.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Messages } from '../../../common/messages';
import {
  mockCentral,
  mockCentralDataDto,
  mockCreateCentralDto,
  mockFilters,
  mockPaginationDto,
  mockResult,
} from './mocks/mockCentrals';

type CentralServiceMock = DeepMockProxy<CentralService>;

describe('CentralController', () => {
  let controller: CentralController;
  let service: CentralServiceMock;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentralController],
      providers: [CentralService],
    })
      .overrideProvider(CentralService)
      .useValue(mockDeep<CentralService>())
      .compile();

    controller = module.get<CentralController>(CentralController);
    service = module.get(CentralService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('count', () => {
    it('should return the total count of centrals', async () => {
      service.countAll.mockResolvedValue(5);
      const result = await controller.count();
      expect(service.countAll).toHaveBeenCalled();
      expect(result).toEqual({ total: 5 });
    });

    it('should throw an HttpException on internal error', async () => {
      service.countAll.mockRejectedValue(new Error('DB error'));
      await expect(controller.count()).rejects.toThrow(
        new HttpException(
          Messages.Central.http.INTERNAL_SERVER_ERROR,
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });

  describe('createCentral', () => {
    it('should create a new central', async () => {
      service.create.mockResolvedValue(mockCentral);
      const result = await controller.createCentral(mockCreateCentralDto);
      expect(service.create).toHaveBeenCalledWith(mockCreateCentralDto);
      expect(result).toEqual(mockCentral);
    });

    it('should throw HttpException on conflict error', async () => {
      const error = { code: HttpStatus.CONFLICT, message: 'MAC not unique' };
      service.create.mockRejectedValue(error);
      await expect(
        controller.createCentral(mockCreateCentralDto),
      ).rejects.toThrow(new HttpException(error.message, error.code));
    });

    it('should throw HttpException on not found error', async () => {
      const error = { code: HttpStatus.NOT_FOUND, message: 'Model not found' };
      service.create.mockRejectedValue(error);
      await expect(
        controller.createCentral(mockCreateCentralDto),
      ).rejects.toThrow(new HttpException(error.message, error.code));
    });
  });

  describe('findOne', () => {
    it('should find a central by id', async () => {
      service.findOneById.mockResolvedValue(mockCentralDataDto);
      const result = await controller.findOne(1);
      expect(service.findOneById).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockCentralDataDto);
    });

    it('should throw HttpException on not found error', async () => {
      const error = {
        code: HttpStatus.NOT_FOUND,
        message: 'Central not found',
      };
      service.findOneById.mockRejectedValue(error);
      await expect(controller.findOne(999)).rejects.toThrow(
        new HttpException(error.message, error.code),
      );
    });
  });

  describe('deleteById', () => {
    it('should delete a central by id', async () => {
      service.deleteById.mockResolvedValue();
      await expect(controller.deleteById(1)).resolves.not.toThrow();
      expect(service.deleteById).toHaveBeenCalledWith(1);
    });

    it('should throw HttpException on not found error', async () => {
      const error = {
        code: HttpStatus.NOT_FOUND,
        message: 'Central not found',
      };
      service.deleteById.mockRejectedValue(error);
      await expect(controller.deleteById(999)).rejects.toThrow(
        new HttpException(error.message, error.code),
      );
    });
  });

  describe('findAll', () => {
    it('should return all centrals with pagination and filters', async () => {
      service.findAll.mockResolvedValue(mockResult);
      const result = await controller.findAll(mockPaginationDto, mockFilters);
      expect(service.findAll).toHaveBeenCalledWith(
        mockPaginationDto,
        mockFilters,
      );
      expect(result).toEqual(mockResult);
    });

    it('should throw HttpException on internal error', async () => {
      service.findAll.mockRejectedValue(new Error('DB error'));
      await expect(controller.findAll({}, {})).rejects.toThrow(
        new HttpException(
          Messages.Central.http.INTERNAL_SERVER_ERROR,
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });

  describe('updateCentral', () => {
    const updateDto = {
      name: 'Central Atualizada',
      mac: 'CC:DD:EE:FF:11:22',
    };

    it('should update a central successfully', async () => {
      service.update.mockResolvedValue(mockCentralDataDto);
      const result = await controller.updateCentral(1, updateDto);
      expect(service.update).toHaveBeenCalledWith(1, updateDto);
      expect(result).toEqual(mockCentralDataDto);
    });

    it('should throw HttpException on conflict error', async () => {
      const error = { code: HttpStatus.CONFLICT, message: 'MAC not unique' };
      service.update.mockRejectedValue(error);
      await expect(controller.updateCentral(1, updateDto)).rejects.toThrow(
        new HttpException(error.message, error.code),
      );
    });

    it('should throw HttpException on not found error', async () => {
      const error = {
        code: HttpStatus.NOT_FOUND,
        message: 'Central not found',
      };
      service.update.mockRejectedValue(error);
      await expect(controller.updateCentral(999, updateDto)).rejects.toThrow(
        new HttpException(error.message, error.code),
      );
    });
  });
});
