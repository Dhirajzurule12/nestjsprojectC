/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  // Res,
  UploadedFile,
  UseInterceptors,
  // UploadedFile,
  // UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
//import { profile } from 'console';
// import { FileInterceptor } from '@nestjs/platform-express';
import { from, Observable, of } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserDto } from '../dto/user.dto';
import { FeedPost } from '../models/post.interface';
import { CreateRoleDto } from '../role/dto/create-role.dto';
import { Role } from '../role/entities/role.entity';
import { Rolepost } from '../role/entities/role.interface';
import { FeedService } from '../services/feed.service';
// import { diskStorage } from 'multer';
// import { extname } from 'path/posix';
// import { callbackify } from 'util';

@Controller('user')
export class FeedController {
  imagepat: string;
  imagepath: string;
  constructor(private feedService: FeedService) {}
  // constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() userdto: UserDto): Observable<FeedPost> {
    console.log(userdto);
    return this.feedService.createPost(userdto);
  }

  // @Post('/rolepost')
  // createrole(@Body() createroledto: CreateRoleDto): Observable<Rolepost> {
  //   console.log(createroledto);
  //   return this.feedService.createPostRole(createroledto);
  // }

  // @Get('/:id')
  // getUserById(@Param('id') id: number): Observable<FeedPost> {
  //   return this.feedService.getUser(id);
  // }

  @Get(':id')
  // getSpecificStudent(@Param('id') id:number): Book {
  getSpecificBook(@Param('id') id: number): Observable<FeedPost> {
    console.log('get by id is called');
    return this.feedService.getSpecificUser(id);
  }

  @Get()
  findAll() {
    console.log('function api is called');
    return this.feedService.findAllPosts();
  }

  // @Put(':id')
  // update(
  //   @Param('id') id: number,
  //   @Body() userdto: UserDto,
  // ): Observable<UpdateResult> {
  //   return this.feedService.updatePost(id, userdto);
  // }

  @Delete('/:id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }

  @Get('get/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './uploads' });
  }

  // @Post(':add')
  // @UseInterceptors(FileInterceptor('image'))
  // postAdd(@UploadedFile() profilexyz: Array<Express.Multer.File>): object {
  //   console.log(profilexyz);
  //   return {
  //     message: 'file uploaded',
  //   };
  // }
}
