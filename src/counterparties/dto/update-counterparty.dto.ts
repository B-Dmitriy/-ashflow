import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, Length } from 'class-validator';
import { CreateCounterpartyDto } from './create-counterparty.dto';

export class UpdateCounterpartyDto extends PartialType(CreateCounterpartyDto) {
  @ApiProperty({ default: 'Google' })
  @IsNotEmpty()
  name: string = '';

  @ApiProperty({ maxLength: 1024, required: false })
  @Length(0, 1024)
  description: string = '';
}
