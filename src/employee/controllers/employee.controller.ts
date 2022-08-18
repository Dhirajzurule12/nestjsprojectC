import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { EmployeePost } from '../modules/post_interface';
import { EmployeeService } from '../services/employee.service';

@Controller('employees')
export class EmployeeController {
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

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() employeePost: EmployeePost,
  ): Observable<UpdateResult> {
    return this.employeeService.updatePost(id, employeePost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.employeeService.deletePost(id);
  }
}
