import { Injectable } from '@nestjs/common';
import { CreateCounterpartyDto } from './dto/create-counterparty.dto';
import { UpdateCounterpartyDto } from './dto/update-counterparty.dto';
import { Counterparty } from './interfaces/counterparty.interface';

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

  findAll() {
    return this.counterparties;
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
