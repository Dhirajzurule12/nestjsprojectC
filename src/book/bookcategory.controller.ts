import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFile } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BookCategoryService } from './bookcategory.service';
import { CreateBookCategoryDto } from './dto/create-bookcategory.dto';
import { BookCategoryEntity } from './entities/bookcategory.entity';


@Controller('bookcontroller')
export class BookCategory{
  //bookcategoryService: any;
  imagepath: string;

  constructor(private readonly bookcategoryService: BookCategoryService) { }
  @Post()
  create(@Body() createBookCategoryDto: CreateBookCategoryDto) {
    return this.bookcategoryService.create(createBookCategoryDto);
  }

  handleupload(@UploadedFile() image: Express.Multer.File) {
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return "file upload API" + this.imagepath;
    // return this.bookService.handleupload(image);
  }
  @Get('showimage/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
  
  //Get all
  @Get()
  findAll() {
    return this.bookcategoryService.findAllPosts();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookcategoryService.getOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: number, @Body() createbookcategoryDto: UpdateBookcategoryDto) {
  //   return this.bookcategoryService.updatePutBook(id, createbookcategoryDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: number):Observable<DeleteResult> {
    return this.bookcategoryService.deleteBook(+id);
  }
  @Put(':id')
  update1(
    @Param('id') id: number,
    @Body() usercategorydto: BookCategoryEntity,
  ): Observable<UpdateResult> {
    return this.bookcategoryService.updatePutBook(id, usercategorydto);
  }
}