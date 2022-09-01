import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';
import { SubjectService } from './subject.service';
import { SubjectPost } from './subject.interface';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Post()
  create(@Body() subjectPost: SubjectPost): Observable<SubjectPost> {
    return this.subjectService.createpost(subjectPost);
  }

  @Get()
  findAll(): Observable<SubjectPost[]> {
    return this.subjectService.findAllPosts();
  }

  // @Put(':id')
  // update(
  //   @Param('id') id: number,
  //   @Body()
  //   subjectPost: SubjectPost,
  // ): Observable<UpdateResult> {
  //   return this.subjectService.updatePost(id, subjectPost);
  // }

  //     @Delete(':id')
  //     delete(@Param('id') id: number): Observable<DeleteResult> {
  //       return this.subjectService.deletePost(id);
  //     }
}
