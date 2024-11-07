import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  Generated,
  OneToOne, JoinColumn,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Geo } from './geo.entity';

@Entity({ name: 'addresses' })
export class Address {
  @Exclude()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Expose({ name: 'id' })
  @Index()
  @Column()
  @Generated('uuid')
  uuid: string;

  @Column()
  street: string;

  @Column()
  suite: string;

  @Column()
  city: string;

  @Column()
  zipcode: string;

  @OneToOne(() => Geo, { cascade: true })
  @JoinColumn()
  geo: Geo;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
