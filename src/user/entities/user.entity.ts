import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  OneToOne, JoinColumn,
  Index,
  Generated,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
} from 'typeorm';
import { Address } from './address.entity';
import { Company } from './company.entity';
import { Post } from '../../post/entities/post.entity';
import { Album } from '../../album/entities/album.entity';
import { Todo } from '../../todo/entities/todo.entity';

@Entity({ name: 'users' })
export class User {
  @Exclude()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Expose({ name: 'id' })
  @Index()
  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  username: string;

  @Column()
  email: string;

  @Exclude({ toPlainOnly: true })
  password: string;

  @Column()
  phone: string;

  @Column()
  website: string;

  @OneToOne(() => Address, { cascade: true })
  @JoinColumn()
  address: Address;

  @OneToOne(() => Company, { cascade: true })
  @JoinColumn()
  company: Company;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Album, (album) => album.user)
  albums: Album[];

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
