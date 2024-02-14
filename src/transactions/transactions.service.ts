import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TransactionDto } from './dto/transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { GetTransactionsQueryDto } from './dto/get-transaction-query.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<TransactionDto> {
    return await this.transactionsRepository.save(createTransactionDto);
  }

  // TODO: Common return type for tables
  async findAll(queryParams: GetTransactionsQueryDto) {
    const [transactions, total] =
      await this.transactionsRepository.findAndCount({
        take: +queryParams.limit,
        skip: (+queryParams.page - 1) * +queryParams.limit,
        relations: { counterparty: true },
      });

    return {
      items: transactions,
      page: +queryParams.page,
      limit: +queryParams.limit,
      total,
    };
  }

  async findOne(id: number) {
    return await this.transactionsRepository.findOne({
      where: { id },
      relations: {
        counterparty: true,
      },
    });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const updateResult = await this.transactionsRepository.update(
      id,
      updateTransactionDto,
    );

    if (updateResult.affected === 0) throw new NotFoundException();

    return await this.transactionsRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const deletedResult = await this.transactionsRepository.delete(id);

    if (deletedResult.affected === 0) throw new NotFoundException();

    return;
  }
}
