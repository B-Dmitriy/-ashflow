import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Counterparty } from '../counterparties/entities/counterparty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Counterparty])],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
