import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  Generated,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'geos' })
export class Geo {
  @Exclude()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Expose({ name: 'id' })
  @Index()
  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  lat: string;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  lng: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
