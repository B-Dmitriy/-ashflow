import { Counterparty } from '../interfaces/counterparty.interface';

export class GetCounterpartiesResponseDto {
  items: Counterparty[];
  page: number;
  limit: number;
  total: number;
}
