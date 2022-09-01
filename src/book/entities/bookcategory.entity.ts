
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookEntity } from './book.entity';

@Entity('bookCategory')
export class BookCategoryEntity {
  @PrimaryGeneratedColumn()
  bookcategory_id:number;
  @Column()
  bookcategory_name:string;  
  //mycoderunning
  // @ManyToMany(() => BookEntity, (book : BookEntity) => book.category)  
  // book : BookEntity;

  @ManyToMany(() => BookEntity)
   @JoinTable(
   )
  categories: BookEntity[]
}