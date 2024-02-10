import { Test, TestingModule } from '@nestjs/testing';
import { CounterpartiesService } from './counterparties.service';

describe('CounterpartiesService', () => {
  let service: CounterpartiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CounterpartiesService],
    }).compile();

    service = module.get<CounterpartiesService>(CounterpartiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
