/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('feed_post')
export class FeedPostEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ default: '' })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  email: string;

  @CreateDateColumn()
  location: string;

  @CreateDateColumn()
  github: string;
}
