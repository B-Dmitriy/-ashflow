import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CounterpartiesController } from '../../../src/counterparties/counterparties.controller';
import { CounterpartiesService } from '../../../src/counterparties/counterparties.service';

describe('CounterpartiesController', () => {
  let app: INestApplication;
  let controller: CounterpartiesController;
  let service: CounterpartiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CounterpartiesController],
      providers: [CounterpartiesService],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    controller = module.get<CounterpartiesController>(CounterpartiesController);
    service = module.get<CounterpartiesService>(CounterpartiesService);
  });

  afterEach(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
