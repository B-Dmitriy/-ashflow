import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateCounterpartyDto } from './create-counterparty.dto';

export class UpdateCounterpartyDto extends PartialType(CreateCounterpartyDto) {
  @IsNotEmpty()
  name: string;
  description: string;
}
