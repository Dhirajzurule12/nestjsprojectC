
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bookCategory')
export class BookCategoryEntity {
  @PrimaryGeneratedColumn()
  book_id:number;
  @Column()
  book_author: string;
  @Column()
  book_category:string;
}