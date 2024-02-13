import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'cashflow.db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});
