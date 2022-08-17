import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BookEntity } from './entities/book.entity';
import { Book } from './entities/book.interface';

@Injectable()
export class BookService {
    constructor (
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>
    ) {}

    create(book: Book): Observable<Book> {
        return from(this.bookRepository.save(book));
    }

    findAllBooks(): Observable<Book[]> {
        return from(this.bookRepository.find());
    }
    getOne(id:number):Observable<Book> {
        const book_id=id;
        return from(this.bookRepository.findOneBy({book_id}))

    }
    // getSpecificBook(id:number): Observable<Book> {
        // return from(this.bookRepository.find(id));
        // const book_id = id;
        // return from(this.bookRepository.findOneBy({book_id}));
    // }

    updatePutBook(id: number, book: Book): Observable<UpdateResult>{
        return from(this.bookRepository.update(id,book));
    }

    updatePatchBook(id: number, book: Book): Observable<UpdateResult>{
        return from(this.bookRepository.update(id,book));
    }

    deleteBook(id: number): Observable<DeleteResult> {
        return from(this.bookRepository.delete(id));
    }
}