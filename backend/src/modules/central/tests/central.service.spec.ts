import { Test, TestingModule } from '@nestjs/testing';
import { CentralRepository } from '../repositories/central.repository';
import { ModelService } from '../../model/services/model.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { HttpStatus } from '@nestjs/common';
import { Messages } from '../../../common/messages';
import { EventsGateway } from '../../events/events.gateway';
import { CentralWithModel } from '../types/central.type';
import { CentralService } from '../services/central.service';
import {
  mockCentral,
  mockCentralDataDto,
  mockCentralWithModel,
  mockCreateCentralDto,
  mockPaginationDto,
  mockUpdatedCentralWithModel,
  mockUpdateDto,
} from './mocks/mockCentrals';
import { mockModel } from 'src/modules/model/tests/mocks/mockModels';

type CentralRepositoryMock = DeepMockProxy<CentralRepository>;
type ModelServiceMock = DeepMockProxy<ModelService>;
type EventsGatewayMock = DeepMockProxy<EventsGateway>;

describe('CentralService', () => {
  let service: CentralService;
  let centralRepository: CentralRepositoryMock;
  let modelService: ModelServiceMock;
  let eventsGateway: EventsGatewayMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CentralService,
        CentralRepository,
        ModelService,
        EventsGateway,
      ],
    })
      .overrideProvider(CentralRepository)
      .useValue(mockDeep<CentralRepository>())
      .overrideProvider(ModelService)
      .useValue(mockDeep<ModelService>())
      .overrideProvider(EventsGateway)
      .useValue(mockDeep<EventsGateway>())
      .compile();

    service = module.get<CentralService>(CentralService);
    centralRepository = module.get(CentralRepository);
    modelService = module.get(ModelService);
    eventsGateway = module.get(EventsGateway);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new central and send notification', async () => {
      modelService.findOneById.mockResolvedValue(mockModel);
      centralRepository.create.mockResolvedValue(mockCentral);

      const result = await service.create(mockCreateCentralDto);

      expect(modelService.findOneById).toHaveBeenCalledWith(
        mockCreateCentralDto.modelId,
      );
      expect(centralRepository.create).toHaveBeenCalledWith(
        mockCreateCentralDto,
      );
      expect(eventsGateway.sendNewCentralNotification).toHaveBeenCalledWith(
        `${Messages.Central.events.NEW_CENTRAL_AVAILABLE} ${mockCentral.name}`,
      );

      expect(result).toEqual(mockCentral);
    });

    it('should throw NOT_FOUND error if model does not exist', async () => {
      modelService.findOneById.mockResolvedValue(null);

      await expect(service.create(mockCreateCentralDto)).rejects.toEqual({
        code: HttpStatus.NOT_FOUND,
        message: `${Messages.Model.http.ID_NOT_FOUND_ERROR} ${mockCreateCentralDto.modelId}.`,
      });

      expect(centralRepository.create).not.toHaveBeenCalled();
    });
  });

  describe('findOneById', () => {
    it('should find and map a central by id', async () => {
      centralRepository.findOneById.mockResolvedValue(mockCentralWithModel);

      const result = await service.findOneById(1);

      expect(centralRepository.findOneById).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockCentralDataDto);
    });

    it('should throw NOT_FOUND error if central does not exist', async () => {
      centralRepository.findOneById.mockResolvedValue(null);

      await expect(service.findOneById(99)).rejects.toEqual({
        code: HttpStatus.NOT_FOUND,
        message: `${Messages.Central.http.ID_NOT_FOUND_ERROR} 99.`,
      });
    });
  });

  describe('deleteById', () => {
    it('should delete a central by id', async () => {
      centralRepository.deleteById.mockResolvedValue();
      await expect(service.deleteById(1)).resolves.not.toThrow();
      expect(centralRepository.deleteById).toHaveBeenCalledWith(1);
    });
  });

  describe('findAll', () => {
    const mockCentrals: CentralWithModel[] = [
      mockCentralWithModel,
      {
        ...mockCentralWithModel,
        id: 2,
        name: 'Central 2',
      },
    ];

    it('should find all centrals with pagination and filters', async () => {
      const filters = { name: 'Central' };

      centralRepository.findAll.mockResolvedValue(mockCentrals);
      centralRepository.countAll.mockResolvedValue(2);

      const result = await service.findAll(mockPaginationDto, filters);

      expect(centralRepository.findAll).toHaveBeenCalledWith(
        0,
        10,
        'id',
        'asc',
        filters,
      );
      expect(centralRepository.countAll).toHaveBeenCalledWith(filters);
      expect(result.total).toBe(2);
      expect(result.data).toEqual([
        mockCentralDataDto,
        {
          ...mockCentralDataDto,
          id: 2,
          name: 'Central 2',
        },
      ]);
    });
  });

  describe('update', () => {
    it('should update a central successfully', async () => {
      centralRepository.findOneById.mockResolvedValue(mockCentralWithModel);
      modelService.findOneById.mockResolvedValue(mockModel);
      centralRepository.update.mockResolvedValue(mockUpdatedCentralWithModel);

      const result = await service.update(1, mockUpdateDto);

      expect(centralRepository.findOneById).toHaveBeenCalledWith(1);
      expect(modelService.findOneById).toHaveBeenCalledWith(2);
      expect(centralRepository.update).toHaveBeenCalledWith(1, mockUpdateDto);
      expect(result.name).toEqual(mockUpdateDto.name);
    });

    it('should throw NOT_FOUND error if central to be updated does not exist', async () => {
      centralRepository.findOneById.mockResolvedValue(null);
      await expect(service.update(99, mockUpdateDto)).rejects.toEqual({
        code: HttpStatus.NOT_FOUND,
        message: `${Messages.Central.http.ID_NOT_FOUND_ERROR} 99.`,
      });
      expect(centralRepository.update).not.toHaveBeenCalled();
    });

    it('should throw NOT_FOUND error if new model does not exist', async () => {
      centralRepository.findOneById.mockResolvedValue(mockCentralWithModel);
      modelService.findOneById.mockResolvedValue(null);

      await expect(service.update(1, mockUpdateDto)).rejects.toEqual({
        code: HttpStatus.NOT_FOUND,
        message: `${Messages.Model.http.ID_NOT_FOUND_ERROR} ${mockUpdateDto.modelId}.`,
      });
      expect(centralRepository.update).not.toHaveBeenCalled();
    });
  });
});
