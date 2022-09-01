import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { EmployeePost } from '../modules/post_interface';
import { EmployeeService } from '../services/employee.service';

@Controller('employees')
export class EmployeeController {
  imagepath: string;
  constructor(private employeeService: EmployeeService) {}

  @Post()
  create(@Body() employeePost: EmployeePost) {
    return this.employeeService.createPost(employeePost);
  }

  @Get()
  findAll(): Observable<EmployeePost[]> {
    return this.employeeService.findAllPosts();
  }

  @Get(':id')
  getSpecificPost(@Param('id') id: number): Observable<EmployeePost> {
    return this.employeeService.getSpecificPost(id);
  }

  @Patch(':id')
  updatePatch(
    @Param('id') id: number,
    @Body() employeePost: EmployeePost,
  ): Observable<UpdateResult> {
    return this.employeeService.updatePatchPost(id, employeePost);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() employeePost: EmployeePost,
  ): Observable<UpdateResult> {
    console.log('Hey Api is called');
    return this.employeeService.updatePost(id, employeePost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.employeeService.deletePost(id);
  }

  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './src/product/images',
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
  @Get('/image/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './src/product/images' });
  }
}
