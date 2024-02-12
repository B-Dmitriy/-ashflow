import { Counterparty } from '../entities/counterparty.entity';

export class GetCounterpartiesResponseDto {
  items: Counterparty[] = [];
  page: number = 0;
  limit: number = 0;
  total: number = 0;
}
