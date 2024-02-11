import { Module } from '@nestjs/common';
import { CounterpartiesModule } from './counterparties/counterparties.module';

@Module({
  imports: [CounterpartiesModule],
})
export class AppModule {}
