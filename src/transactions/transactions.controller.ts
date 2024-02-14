import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  Query,
} from '@nestjs/common';

import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { GetTransactionsQueryDto } from './dto/get-transaction-query.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    return await this.transactionsService.create(createTransactionDto);
  }

  @Get()
  async findAll(@Query() queryParams: GetTransactionsQueryDto) {
    return await this.transactionsService.findAll(queryParams);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.transactionsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return await this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.transactionsService.remove(+id);
  }
}
