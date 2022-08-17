import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EmployeePostEntity } from '../modules/post_entity';
import { EmployeePost } from '../modules/post_interface';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeePostEntity)
        private readonly employeePostRepository: Repository<EmployeePostEntity>
    ){}

    createPost(employeepost: EmployeePost):Observable<EmployeePost>{
       return from(this.employeePostRepository.save(employeepost));
    }

    findAllPosts():Observable<EmployeePost[]>{
        return from(this.employeePostRepository.find());
    }

    getSpecificPost(id:number): Observable<EmployeePost> {
        const emp_id = id;
        return from(this.employeePostRepository.findOneBy({emp_id}));
    }

   updatePost(id: number, employeepost: EmployeePost): Observable<UpdateResult>{
     return from(this.employeePostRepository.update(id, employeepost))
   }

   deletePost(id: number): Observable<DeleteResult>{
        return from(this.employeePostRepository.delete(id));
   }
}

