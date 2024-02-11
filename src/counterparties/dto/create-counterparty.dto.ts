import { IsNotEmpty } from 'class-validator';

export class CreateCounterpartyDto {
  @IsNotEmpty()
  name: string;
  description: string;
}
