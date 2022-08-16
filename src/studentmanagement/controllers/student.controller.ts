import { Body, Controller, Post } from '@nestjs/common';
import { StudentPost } from '../model/post.interface';
import { StudentsService } from '../Services/student.service';
import { Observable} from 'rxjs';
@Controller('students')
export class StudentsController {
    constructor(private studentService: StudentsService){}
  
  
  
    @Post()
  create(@Body() post:StudentPost):Observable<StudentPost> {
    return this.studentService.createpost(post);
  }
}
