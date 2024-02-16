import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, Min } from 'class-validator';

export class GetTransactionsQueryDto {
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
  @IsIn(['id', 'createdAt', ''])
  readonly sort: string = 'createdAt';

  @IsOptional()
  @IsIn(['asc', 'desc', ''])
  readonly order: string = 'asc';

  @IsOptional()
  readonly search: string = '';
}
