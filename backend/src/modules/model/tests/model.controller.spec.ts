import { Test, TestingModule } from '@nestjs/testing';
import { ModelController } from '../controllers/model.controller';
import { ModelService } from '../services/model.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { Messages } from '../../../common/messages';
import { mockModelsDto } from './mocks/mockModels';

type ModelServiceMock = DeepMockProxy<ModelService>;

describe('ModelController', () => {
  let controller: ModelController;
  let service: ModelServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModelController],
      providers: [ModelService],
    })
      .overrideProvider(ModelService)
      .useValue(mockDeep<ModelService>())
      .compile();

    controller = module.get<ModelController>(ModelController);
    service = module.get(ModelService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of models', async () => {
      service.getAll.mockResolvedValue(mockModelsDto);

      const result = await controller.getAll();

      expect(service.getAll).toHaveBeenCalled();

      expect(result).toEqual(mockModelsDto);
    });

    it('should throw an HttpException if an error occurs', async () => {
      service.getAll.mockRejectedValue(new Error('Internal server error'));

      await expect(controller.getAll()).rejects.toThrow(
        new HttpException(
          Messages.Model.http.INTERNAL_SERVER_ERROR,
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });
});
