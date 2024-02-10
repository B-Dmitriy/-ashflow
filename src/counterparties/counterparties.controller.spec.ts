import { Test, TestingModule } from '@nestjs/testing';
import { CounterpartiesController } from './counterparties.controller';
import { CounterpartiesService } from './counterparties.service';

describe('CounterpartiesController', () => {
  let controller: CounterpartiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CounterpartiesController],
      providers: [CounterpartiesService],
    }).compile();

    controller = module.get<CounterpartiesController>(CounterpartiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
