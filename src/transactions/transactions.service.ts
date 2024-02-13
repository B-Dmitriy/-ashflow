import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    return await this.transactionsRepository.save(createTransactionDto);
  }

  async findAll() {
    // TODO: возможно стоит использовать JOIN
    const [transactions, total] =
      await this.transactionsRepository.findAndCount({
        relations: { counterparty: true },
      });

    return {
      items: transactions,
      page: 1,
      limit: 25,
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

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
