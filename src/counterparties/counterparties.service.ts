import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Counterparty } from './entities/counterparty.entity';
import { CreateCounterpartyDto } from './dto/create-counterparty.dto';
import { UpdateCounterpartyDto } from './dto/update-counterparty.dto';
import { GetCounterpartiesQueryDto } from './dto/get-counterparties-query.dto';
import { GetCounterpartiesResponseDto } from './dto/get-counterparties-response.dto';

@Injectable()
export class CounterpartiesService {
  constructor(
    @InjectRepository(Counterparty)
    private repository: Repository<Counterparty>,
  ) {}

  async create(
    createCounterpartyDto: CreateCounterpartyDto,
  ): Promise<Counterparty> {
    return this.repository.save(createCounterpartyDto);
  }

  async findAll(
    queryParams: GetCounterpartiesQueryDto,
  ): Promise<GetCounterpartiesResponseDto> {
    const total = await this.repository.count();
    const items = await this.repository.find({
      // TODO: Refactoring
      take: +queryParams.limit,
      skip:
        +queryParams.page === 1
          ? 0
          : (+queryParams.page - 1) * +queryParams.limit,
    });

    return {
      items,
      page: +queryParams.page,
      limit: +queryParams.limit,
      total,
    };
  }

  async findOne(id: number): Promise<Counterparty> {
    return await this.repository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateCounterpartyDto: UpdateCounterpartyDto,
  ): Promise<Counterparty> {
    await this.repository.update(id, updateCounterpartyDto);
    return await this.repository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
    return;
  }
}
