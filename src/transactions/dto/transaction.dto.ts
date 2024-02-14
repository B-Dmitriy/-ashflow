import { IsNotEmpty, Length } from 'class-validator';
import { CreateDateColumn } from 'typeorm';

export class TransactionDto {
  id: number;

  @Length(0, 255)
  comment: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  counterpartyId: number;

  @CreateDateColumn()
  createdAt: string;
}
