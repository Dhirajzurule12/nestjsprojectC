/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { StudentPostEntity } from '../model/post.entity';
import { StudentPost } from '../model/post.interface';
@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentPostEntity)
    private readonly studentPostRepository: Repository<StudentPostEntity>,
  ) {}

  createpost(studentPost: StudentPost): Observable<StudentPost> {
    return from(this.studentPostRepository.save(studentPost));
  }
  findAllPosts(): Observable<StudentPost[]> {
    return from(this.studentPostRepository.find());
  }

  updatePost(id: number, studentPost: StudentPost): Observable<UpdateResult> {
    return from(this.studentPostRepository.update(id, studentPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.studentPostRepository.delete(id));
  }
}
