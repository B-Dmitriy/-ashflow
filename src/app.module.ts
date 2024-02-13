import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CounterpartiesModule } from './counterparties/counterparties.module';
import { dataSource } from './data.source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSource.options), CounterpartiesModule],
})
export class AppModule {}
