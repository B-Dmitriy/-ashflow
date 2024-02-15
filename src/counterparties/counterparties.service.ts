import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions, Like } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { CounterpartyDto } from './dto/сounterparty.dto';
import { Counterparty } from './entities/counterparty.entity';
import { CreateCounterpartyDto } from './dto/create-counterparty.dto';
import { UpdateCounterpartyDto } from './dto/update-counterparty.dto';
import { PaginationResponseDto } from '../common/utils/dto/pagination.dto';
import { GetCounterpartiesQueryDto } from './dto/get-counterparties-query.dto';

@Injectable()
export class CounterpartiesService {
  constructor(
    @InjectRepository(Counterparty)
    private repository: Repository<Counterparty>,
  ) {}

  async create(
    createCounterpartyDto: CreateCounterpartyDto,
  ): Promise<CounterpartyDto> {
    return this.repository.save(createCounterpartyDto);
  }

  async findAll(
    queryParams: GetCounterpartiesQueryDto,
  ): Promise<PaginationResponseDto<Counterparty>> {
    const options: FindManyOptions = {
      take: +queryParams.limit,
      skip: (+queryParams.page - 1) * +queryParams.limit,
      order: { [queryParams.sort]: queryParams.order },
      where: [
        { name: Like(`%${queryParams.search}%`) },
        { description: Like(`%${queryParams.search}%`) },
      ],
    };

    console.log(Like(queryParams.search));
    const [items, total] = await this.repository.findAndCount(options);

    return {
      items,
      page: +queryParams.page,
      limit: +queryParams.limit,
      total,
    };
  }

  async findOne(id: number): Promise<CounterpartyDto> {
    const counterparty = await this.repository.findOneBy({ id });

    if (!counterparty) throw new NotFoundException();

    return counterparty;
  }

  async update(
    id: number,
    updateCounterpartyDto: UpdateCounterpartyDto,
  ): Promise<CounterpartyDto> {
    const updateResult = await this.repository.update(
      id,
      updateCounterpartyDto,
    );

    if (updateResult.affected === 0) throw new NotFoundException();

    return await this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    const deletedResult = await this.repository.delete(id);

    if (deletedResult.affected === 0) throw new NotFoundException();

    return;
  }
}
