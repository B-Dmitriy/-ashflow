import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, Length } from 'class-validator';

import { TransactionDto } from './transaction.dto';

export class CreateTransactionDto extends PartialType(TransactionDto) {
  @ApiProperty({ maxLength: 255, default: 'comment for payment' })
  @Length(0, 255)
  comment: string;

  @ApiProperty({ enum: ['in', 'out'], default: 'out' })
  @IsNotEmpty()
  @IsIn(['in', 'out'])
  type: string;

  @ApiProperty({ default: 1000 })
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ default: 'RUB' })
  @IsNotEmpty()
  currency: string;

  @ApiProperty({
    default: 1,
    description: 'Counterparty with this ID must exist',
  })
  @IsNotEmpty()
  counterpartyId: number;
}
