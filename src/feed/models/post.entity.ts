/* eslint-disable prettier/prettier */
import { IsDefined, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from '../address/entities/address.entity';

import { Role } from '../role/entities/role.entity';

// import { Role } from './role.entity';
// import { SocialMediaEntity } from './role.entity';
// import { Mail } from './post2.entity';

@Entity('user')
export default class FeedPostEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  @IsString()
  @IsDefined()
  name: string;

  @Column()
  gender: string; //used

  @Column()
  mobile_number: number; //used

  @OneToOne(() => Address, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  address: Address;

  // @OneToMany(() => Photo, (photo) => photo.user, { eager: true, cascade: true })
  // photos: Photo;

  @ManyToMany((type) => Role, (category) => category.users, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  roles: Role[];

  // @Column()
  // address: string;

  @Column()
  email: string;
}
