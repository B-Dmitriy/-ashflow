import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CounterpartiesModule } from './counterparties/counterparties.module';
import { dataSource } from './data.source';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options),
    CounterpartiesModule,
    TransactionsModule,
  ],
})
export class AppModule {}
