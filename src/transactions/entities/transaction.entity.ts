import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Counterparty } from '../../counterparties/entities/counterparty.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  comment: string;

  @Column({ type: 'real', nullable: false })
  amount: number;

  @Column({ nullable: false })
  currency: string;

  @ManyToOne(() => Counterparty)
  @JoinColumn()
  counterparty: Counterparty;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}
