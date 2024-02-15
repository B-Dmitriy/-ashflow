import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, Length } from 'class-validator';

import { TransactionDto } from './transaction.dto';

export class CreateTransactionDto extends PartialType(TransactionDto) {
  @Length(0, 255)
  comment: string;

  @IsNotEmpty()
  @IsIn(['in', 'out'])
  type: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  counterpartyId: number;
}
