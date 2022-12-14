/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDto } from '../dto/user.dto';
import FeedPostEntity from '../models/post.entity';
import { FeedPost } from '../models/post.interface';
import { CreateRoleDto } from '../role/dto/create-role.dto';
import { Role } from '../role/entities/role.entity';
import { Rolepost } from '../role/entities/role.interface';

@Injectable()
export class FeedService {
  [x: string]: any;
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,

    @InjectRepository(Role)
    private readonly rolRepository: Repository<Role>,
  ) {}

  createPost(userdto: UserDto): Observable<FeedPost> {
    console.log(userdto);
    return from(this.feedPostRepository.save(userdto));
  }

  // createPostRole(createroledto: CreateRoleDto): Observable<Rolepost> {
  //   console.log(createroledto);
  //   return from(this.roleRepository.save(createroledto));
  // }

  findAllPosts(): Observable<FeedPostEntity[]> {
    return from(this.feedPostRepository.find());
  }

  updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, feedPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }

  getSpecificUser(id: number): Observable<FeedPost> {
    // return from(this.bookRepository.find(id));
    const user_id = id;
    return from(this.feedPostRepository.findOneBy({ user_id }));
  }
}
