import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateCounterpartyDto {
  @ApiProperty({ default: 'Google' })
  @IsNotEmpty()
  name: string = '';

  @ApiProperty({ maxLength: 1024, required: false })
  @Length(0, 1024)
  description: string = '';
}
