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
import { join } from 'path';
//import { profile } from 'console';
// import { FileInterceptor } from '@nestjs/platform-express';
import { Observable, of } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';
// import { diskStorage } from 'multer';
// import { extname } from 'path/posix';
// import { callbackify } from 'util';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post('members')
  create(@Body() feedPost: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(feedPost);
  }

  // @Get('/:id')
  // getUserById(@Param('id') id: number): Observable<FeedPost> {
  //   return this.feedService.getUser(id);
  // }

  // @Get(':id')
  // // getSpecificStudent(@Param('id') id:number): Book {
  // getSpecificBook(@Param('id') id: number): Observable<FeedPost> {
  //   return this.feedService.getSpecificUser(id);
  // }

  @Get()
  findAll() {
    return this.feedService.findAllPosts();
  }

  // @Put(':id')
  // update(
  //   @Param('id') id: number,
  //   @Body() feedPost: FeedPost,
  // ): Observable<UpdateResult> {
  //   return this.feedService.updatePost(id, feedPost);
  // }

  // @Delete(':id')
  // delete(@Param('id') id: number): Observable<DeleteResult> {
  //   return this.feedService.deletePost(id);
  // }

  // @Post(':add')
  // @UseInterceptors(FileInterceptor('image'))
  // postAdd(@UploadedFile() profilexyz: Array<Express.Multer.File>): object {
  //   console.log(profilexyz);
  //   return {
  //     message: 'file uploaded',
  //   };
  // }

  // @Get('add/:imagename')
  // findImage(@Param('imagename') imagename, @Res() res): Observable<object> {
  //   return of(res.sendFile(join(process.cwd(), '/ uploads' + imagename)));
  // }
}
