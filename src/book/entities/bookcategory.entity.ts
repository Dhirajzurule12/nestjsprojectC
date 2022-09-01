
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookEntity } from './book.entity';

@Entity('bookCategory')
export class BookCategoryEntity {
  @PrimaryGeneratedColumn()
  bookcategory_id:number;
  @Column()
  book_category:string;  
  //mycoderunning
  // @ManyToMany(() => BookEntity, (book : BookEntity) => book.category)  
  // book : BookEntity;

  @ManyToMany(() => BookEntity)
   @JoinTable(
   )
  categories: BookEntity[]
}