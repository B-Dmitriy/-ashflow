import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, Length } from 'class-validator';

import { TransactionDto } from './transaction.dto';

export class CreateTransactionDto extends PartialType(TransactionDto) {
  @Length(0, 255)
  comment: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  counterpartyId: number;
}