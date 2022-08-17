import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { StudentPost } from '../model/post.interface';
import { StudentsService } from '../Services/student.service';
import { Observable} from 'rxjs';
import { UpdateResult } from 'typeorm';
@Controller('students')
export class StudentsController {
    constructor(private studentService: StudentsService){}
  
  
  
    @Post()
  create(@Body()  studentPost:StudentPost):Observable<StudentPost> {
    return this.studentService.createpost(studentPost);
  }
   
  @Get()
  findAll():Observable<StudentPost[]>{
    return this.studentService.findAllPosts();
  }

  @Put(':id')
  update(
    @Body() post:StudentPost

  ):Observable<UpdateResult>{
    return this.studentService.updatePost(id,studentPost)
  }
}
