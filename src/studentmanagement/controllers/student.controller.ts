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
import { StudentPost } from '../model/post.interface';
import { StudentsService } from '../Services/student.service';
import { Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('student')
export class StudentsController {
  imagepath: string;
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
    @Param('id') id: number,
    @Body()
    studentPost: StudentPost,
  ): Observable<UpdateResult> {
    return this.studentService.updatePost(id, studentPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.studentService.deletePost(id);
  }
  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './images',
        filename: (req, image, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(image.originalname);
          // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleupload(@UploadedFile() image: Express.Multer.File) {
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return 'file upload API';
  }
  @Get('image/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
}
