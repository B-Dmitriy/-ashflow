import { IsNotEmpty, Length } from 'class-validator';

export class CreateTransactionDto {
  @Length(0, 255)
  comment: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  counterpartyId: number;
}
