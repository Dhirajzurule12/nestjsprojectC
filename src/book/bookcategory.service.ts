import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BookCategoryEntity } from './entities/bookcategory.entity';
import { Bookcategory } from './entities/bookcategory.interface';


@Injectable()
export class BookCategoryService{

  constructor(
    @InjectRepository(BookCategoryEntity)
    private readonly bookcategoryRepository: Repository<BookCategoryEntity>
  ){}

  create(bookcategory: Bookcategory): Observable<Bookcategory> {
    return from(this.bookcategoryRepository.save(bookcategory));
}

findAllBooks(): Observable<Bookcategory[]> {
    return from(this.bookcategoryRepository.find());
}
getOne(id: number): Observable<Bookcategory> {
    const bookcategory_id = id;
    return from(this.bookcategoryRepository.findOneBy({ bookcategory_id }))

}
updatePutBook(id: number, bookcategory: Bookcategory): Observable<UpdateResult> {
    return from(this.bookcategoryRepository.update(id, bookcategory));
}

updatePatchBook(id: number, bookcategory: Bookcategory): Observable<UpdateResult> {
    return from(this.bookcategoryRepository.update(id, bookcategory));
}

deleteBook(id: number): Observable<DeleteResult> {
    return from(this.bookcategoryRepository.delete(id));
}

findAllPosts(): Observable<Bookcategory[]> {
    return from(this.bookcategoryRepository.find());
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.bookcategoryRepository.delete(id));
  }
}