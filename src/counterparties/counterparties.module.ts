import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CounterpartiesService } from './counterparties.service';
import { CounterpartiesController } from './counterparties.controller';
import { Counterparty } from './entities/counterparty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Counterparty])],
  controllers: [CounterpartiesController],
  providers: [CounterpartiesService],
  exports: [CounterpartiesService],
})
export class CounterpartiesModule {}
