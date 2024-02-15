export class PaginationResponseDto<T = any> {
  items: T[] = [];
  page: number = 0;
  limit: number = 0;
  total: number = 0;
}
