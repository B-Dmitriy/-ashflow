// import { Counterparty } from '../../counterparties/entities/counterparty.entity';

export class CreateTransactionDto {
  id: number;
  comment: string;
  amount: number;
  currency: string;
  // counterparty: Counterparty;
  createdAt: string;
}
