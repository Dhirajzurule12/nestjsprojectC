import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentPost } from '../model/post.interface';
import { StudentsService } from '../Services/student.service';
import { Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';
@Controller('student')
export class StudentsController {
  constructor(private studentService: StudentsService) {}

  @Post()
  create(@Body() studentPost: StudentPost): Observable<StudentPost> {
    return this.studentService.createpost(studentPost);
  }

  @Get()
  findAll(): Observable<StudentPost[]> {
    return this.studentService.findAllPosts();
  }

  @Put(':id')
  update(
    @Param('id',
   
    ) id: number,
    @Body()
    studentPost: StudentPost,
  ): Observable<UpdateResult> {
    return this.studentService.updatePost(id, studentPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.studentService.deletePost(id);
  }
}
