import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable,from} from 'rxjs';
import { Repository } from 'typeorm';
import { StudentPostEntity } from '../model/post.entity';
import { StudentPost } from '../model/post.interface';
@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentPostEntity)
    private readonly studentPostRepository: Repository<StudentPostEntity>,
  ) {}

  createpost(studentPost: StudentPost): Observable<StudentPost> {
    return from (this.studentPostRepository.save(studentPost));
  }
  findAllPosts():Observable<StudentPost[]>{
    return from(this.studentPostRepository.find());
  }
}
