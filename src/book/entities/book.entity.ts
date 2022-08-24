import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('book_detail')
export class BookEntity {
    @PrimaryGeneratedColumn()
    book_id: number;
    @Column({default: ''})
    book_name: string;
    @Column()
    book_author: string;
    @Column()
    book_price: number;
    @Column()
    book_image: string;
    @Column()
    book_isbn: string;
}