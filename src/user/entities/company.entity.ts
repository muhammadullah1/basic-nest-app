import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  Generated,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'companies' })
export class Company {
  @Exclude()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Expose({ name: 'id' })
  @Index()
  @Column()
  @Generated('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  catchPhrase: string;

  @Column()
  bs: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
