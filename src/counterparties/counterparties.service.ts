import { Injectable, NotFoundException } from '@nestjs/common';
import { CounterpartyDto } from './dto/сounterparty.dto';
import { CreateCounterpartyDto } from './dto/create-counterparty.dto';
import { UpdateCounterpartyDto } from './dto/update-counterparty.dto';
import { GetCounterpartiesQueryDto } from './dto/get-counterparties-query.dto';
import { GetCounterpartiesResponseDto } from './dto/get-counterparties-response.dto';

@Injectable()
export class CounterpartiesService {
  private counterparties: CounterpartyDto[] = [];

  create(createCounterpartyDto: CreateCounterpartyDto): CounterpartyDto {
    const id = Date.now();
    const createdAt = new Date().toISOString();
    const newCounterparty = {
      id,
      createdAt,
      updatedAt: '',
      ...createCounterpartyDto,
    };

    this.counterparties.push(newCounterparty);

    return newCounterparty;
  }

  findAll(
    queryParams: GetCounterpartiesQueryDto,
  ): GetCounterpartiesResponseDto {
    return {
      items: this.counterparties,
      page: +queryParams.page,
      limit: +queryParams.limit,
      total: this.counterparties.length,
    };
  }

  findOne(id: number): CounterpartyDto | undefined {
    return this.counterparties.find((c) => c.id === id);
  }

  update(
    id: number,
    updateCounterpartyDto: UpdateCounterpartyDto,
  ): CounterpartyDto {
    let updatedCounterparty: CounterpartyDto;

    const updatedCounterparts = this.counterparties.map((c) => {
      if (c.id === id) {
        const newStateCounterparty = {
          ...c,
          ...updateCounterpartyDto,
          updatedAt: new Date().toISOString(),
        };
        updatedCounterparty = newStateCounterparty;
        return newStateCounterparty;
      } else {
        return c;
      }
    });

    this.counterparties = updatedCounterparts;

    return updatedCounterparty;
  }

  remove(id: number): void {
    const updatedCounterparts = this.counterparties.filter((c) => c.id !== id);
    if (this.counterparties.length === updatedCounterparts.length) {
      throw new NotFoundException();
    }
    this.counterparties = updatedCounterparts;
    return;
  }
}
