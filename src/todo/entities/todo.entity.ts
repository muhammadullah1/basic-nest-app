import { Exclude, Expose } from 'class-transformer';
import {
  Entity,
  Index,
  Generated,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'todos' })
export class Todo {
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

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.todos, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: User;
}
