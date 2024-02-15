import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { TransactionDto } from './dto/transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { GetTransactionsQueryDto } from './dto/get-transaction-query.dto';
import { PaginationResponseDto } from '../common/utils/dto/pagination.dto';
import { Counterparty } from '../counterparties/entities/counterparty.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Counterparty)
    private counterpartyRepository: Repository<Counterparty>,
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<TransactionDto> {
    const counterpartyId = createTransactionDto.counterpartyId;

    const counterparty = await this.counterpartyRepository.findOneBy({
      id: counterpartyId,
    });

    if (!counterparty) {
      throw new NotFoundException({
        statusCode: 404,
        message: `counterparty with id ${counterpartyId} not found`,
      });
    }

    return await this.transactionsRepository.save(createTransactionDto);
  }

  async findAll(
    queryParams: GetTransactionsQueryDto,
  ): Promise<PaginationResponseDto<TransactionDto>> {
    const transactions = await this.transactionsRepository.query(`
        select t.id,t.amount,t.currency,
               c.name as counterparty,
               c.description as counterpartyDescription,
               t.createdAt,t.comment
        from "transaction" AS t
        LEFT JOIN counterparty AS c
        ON t.counterpartyId = c.id
        WHERE t.comment LIKE '%${queryParams.search.trim()}%'
        OR c.name LIKE '%${queryParams.search.trim()}%'
        OR c.description LIKE '%${queryParams.search.trim()}%'
        ORDER BY t.${queryParams.sort || 'createdAt'} ${queryParams.order.toUpperCase() || 'DESC'}
        LIMIT ${queryParams.limit}
        OFFSET ${(+queryParams.page - 1) * +queryParams.limit};
    `);

    const total = await this.transactionsRepository.count();

    return {
      items: transactions,
      page: +queryParams.page,
      limit: +queryParams.limit,
      total,
    };
  }

  async findOne(id: number): Promise<TransactionDto> {
    const transaction = await this.transactionsRepository.findOneBy({ id });

    if (!transaction) throw new NotFoundException();

    return transaction;
  }

  async update(
    id: number,
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<TransactionDto> {
    const counterpartyId = updateTransactionDto.counterpartyId;

    const counterparty = await this.counterpartyRepository.findOneBy({
      id: counterpartyId,
    });

    if (!counterparty) {
      throw new NotFoundException({
        statusCode: 404,
        message: `counterparty with id ${counterpartyId} not found`,
      });
    }

    const updateResult = await this.transactionsRepository.update(
      id,
      updateTransactionDto,
    );

    if (updateResult.affected === 0) throw new NotFoundException();

    return await this.transactionsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    const deletedResult = await this.transactionsRepository.delete(id);

    if (deletedResult.affected === 0) throw new NotFoundException();

    return;
  }
}
