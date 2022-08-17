import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('book_detail')
export class BookEntity {
    @PrimaryGeneratedColumn()
    book_id: number;
    @Column({default: ''})
    book_name: string;
    @Column()
    author: string;
    @Column()
    price: number;
    @Column()
    book_image: string;
    @Column()
    book_isbn: string;
}