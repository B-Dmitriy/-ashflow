import { IsInt, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetCounterpartiesQueryDto {
  @IsOptional() // Параметр необязательный
  @IsInt() // Должно быть целым числом
  @Min(0) // Минимальное значение
  @Type(() => Number)
  readonly page?: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  readonly limit?: number = 25;
}
