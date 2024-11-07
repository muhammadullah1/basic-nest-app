import { Exclude, Expose } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Generated,
  Index,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Photo } from '../../photo/entities/photo.entity';

@Entity({ name: 'albums' })
export class Album {
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

  @ManyToOne(() => User, (user) => user.albums, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: User;

  @OneToMany(() => Photo, (photo) => photo.album)
  photos: Photo[];
}
