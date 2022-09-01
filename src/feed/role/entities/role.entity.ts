import FeedPostEntity from 'src/feed/models/post.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

/* eslint-disable prettier/prettier */
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role_name: string;

  @ManyToMany((type) => FeedPostEntity, (question) => question.roles)
  users: FeedPostEntity[];
}
