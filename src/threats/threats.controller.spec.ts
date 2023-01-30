import { Test, TestingModule } from '@nestjs/testing';
import { ThreatsController } from './threats.controller';
import { ThreatsService } from './threats.service';

describe('ThreatsController', () => {
  let controller: ThreatsController;
  let service: ThreatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreatsController],
      providers: [ThreatsService],
    }).compile();

    controller = module.get<ThreatsController>(ThreatsController);
    service = module.get<ThreatsService>(ThreatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
