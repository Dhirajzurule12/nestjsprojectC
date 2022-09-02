/* eslint-disable prettier/prettier */
import FeedPostEntity from 'src/feed/models/post.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @OneToOne(() => FeedPostEntity, (user: FeedPostEntity) => user.address) //working one
  user?: FeedPostEntity;
}
