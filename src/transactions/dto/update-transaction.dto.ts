import { PartialType } from '@nestjs/mapped-types';
import {ArrayContains, IsIn, IsNotEmpty, Length} from 'class-validator';

import { CreateTransactionDto } from './create-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
  @Length(0, 255)
  comment: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsIn(['in', 'out'])
  type: string;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  counterpartyId: number;
}
