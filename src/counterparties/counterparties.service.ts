import { Injectable } from '@nestjs/common';
import { Counterparty } from './interfaces/counterparty.interface';
import { CreateCounterpartyDto } from './dto/create-counterparty.dto';
import { UpdateCounterpartyDto } from './dto/update-counterparty.dto';
import { GetCounterpartiesQueryDto } from './dto/get-counterparties-query.dto';
import { GetCounterpartiesResponseDto } from './dto/get-counterparties-response.dto';

@Injectable()
export class CounterpartiesService {
  private counterparties: Counterparty[] = [];

  create(createCounterpartyDto: CreateCounterpartyDto): Counterparty {
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

  findOne(id: number) {
    return this.counterparties.find((c) => c.id === id);
  }

  update(
    id: number,
    updateCounterpartyDto: UpdateCounterpartyDto,
  ): Counterparty {
    let updatedCounterparty: Counterparty;

    const updatedCouterparties = this.counterparties.map((c) => {
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

    this.counterparties = updatedCouterparties;

    return updatedCounterparty;
  }

  remove(id: number): void {
    this.counterparties = this.counterparties.filter((c) => c.id !== id);
    return;
  }
}
