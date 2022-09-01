import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCategory } from './bookcategory.controller';
import { BookCategoryService } from './bookcategory.service';
import { BookEntity } from './entities/book.entity';
import { BookCategoryEntity } from './entities/bookcategory.entity';


@Module({
  controllers: [BookCategory],
  providers: [BookCategoryService],
  imports:[
    TypeOrmModule.forFeature([BookEntity,BookCategoryEntity])
  ],
})
export class BookCategoryModule {}
