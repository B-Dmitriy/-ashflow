import { CounterpartyDto } from './сounterparty.dto';

export class GetCounterpartiesResponseDto {
  items: CounterpartyDto[] = [];
  page: number = 0;
  limit: number = 0;
  total: number = 0;
}
