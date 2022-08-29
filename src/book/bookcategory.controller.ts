import { Controller, Get } from '@nestjs/common';


@Controller('bookcontroller')
export class BookCategory{
  bookcategoryService: any;

  //Get all
  @Get()
  findAll() {
    return this.bookcategoryService.findAllPosts();
  }
}