import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, Length } from 'class-validator';

import { CreateTransactionDto } from './create-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
  @ApiProperty({ maxLength: 255, default: 'comment for payment' })
  @Length(0, 255)
  comment: string;

  @ApiProperty({ default: 2000 })
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ enum: ['in', 'out'], default: 'out' })
  @IsNotEmpty()
  @IsIn(['in', 'out'])
  type: string;

  @ApiProperty({ default: 'RUB' })
  @IsNotEmpty()
  currency: string;

  @ApiProperty({ default: 1 })
  @IsNotEmpty()
  counterpartyId: number;
}
