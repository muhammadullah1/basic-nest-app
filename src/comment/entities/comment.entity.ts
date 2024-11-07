import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  Generated,
  Index,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm';
import { Post } from '../../post/entities/post.entity';

@Entity({ name: 'comments' })
export class Comment {
  @Exclude()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Expose({ name: 'id' })
  @Index()
  @Column()
  @Generated('uuid')
  uuid: string;

  @ManyToOne(() => Post, (post) => post.comments, { nullable: false, onDelete: 'CASCADE' })
  post: Post;

  @Column()
  body: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
