import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CounterpartiesModule } from './counterparties/counterparties.module';

@Module({
  imports: [CounterpartiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
