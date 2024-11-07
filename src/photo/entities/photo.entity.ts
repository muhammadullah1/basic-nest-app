import { Exclude, Expose } from 'class-transformer';
import {
  Entity,
  Column,
  Index,
  Generated,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Album } from '../../album/entities/album.entity';

@Entity({ name: 'photos' })
export class Photo {
  @Exclude()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Expose({ name: 'id' })
  @Index()
  @Column()
  @Generated('uuid')
  uuid: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  thumbnailUrl: string;

  @ManyToOne(() => Album, (album) => album.photos, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  album: Album;
}
