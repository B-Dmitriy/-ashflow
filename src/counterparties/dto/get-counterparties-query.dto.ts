import { IsInt, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetCounterpartiesQueryDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  readonly page: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  readonly limit: number = 25;

  @IsOptional()
  readonly sort: string = 'id';

  @IsOptional()
  readonly order: string = 'desc';

  @IsOptional()
  readonly search: string = '';
}
