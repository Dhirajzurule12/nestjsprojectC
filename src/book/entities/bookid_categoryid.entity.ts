import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import { BookEntity } from './book.entity';
@Entity('bookidcategoryid')
export class BookIdCategoryIdEntity {
  @PrimaryGeneratedColumn()
  book_id:number;
  @Column()
  bookcategory_id: number;
//   @ManyToMany(() => BookEntity)
//    @JoinTable()
//   categories: BookEntity[]
}