import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentPostEntity } from '../model/post.entity';
import { SubjectPost } from './subject.interface';

@Entity()
export class SubjectPostEntity implements SubjectPost {
  string: any;

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Subjects: string;

  @ManyToMany(() => StudentPostEntity)
  @JoinTable()
  categories: StudentPostEntity[];
}
