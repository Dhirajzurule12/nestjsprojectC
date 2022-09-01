import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { SubjectPost } from './subject.interface';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectPostEntity)
    private readonly subjectPostRepository: Repository<SubjectPost>,
  ) {}

  createpost(subjectPost: SubjectPost): Observable<SubjectPost> {
    return from(this.subjectPostRepository.save(subjectPost));
  }
  findAllPosts(): Observable<SubjectPost[]> {
    return from(this.subjectPostRepository.find());
  }

  // updatePost(id: number, subjectPost: SubjectPost): Observable<UpdateResult> {
  //   return from(this.subjectPostRepository.update(id, subjectPost));
  // }

  // deletePost(id: number): Observable<DeleteResult> {
  //   return from(this.subjectPostRepository.delete(id));
  // }
}
function SubjectPostEntity(SubjectPostEntity: any) {
    throw new Error('Function not implemented.');
}
