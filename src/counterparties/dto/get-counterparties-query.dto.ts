import { IsInt, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetCounterpartiesQueryDto {
  @IsOptional() // Параметр необязательный
  @IsInt() // Должно быть целым числом
  @Min(0) // Минимальное значение
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  limit?: number;
}
