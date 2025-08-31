import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../services/app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('healthCheck', () => {
    it('should return "ok"', () => {
      expect(service.healthCheck()).toBe('ok');
    });
  });
});
