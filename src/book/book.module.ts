import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookEntity } from './entities/book.entity';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports:[
    TypeOrmModule.forFeature([BookEntity])
  ],
})
export class BookModule {}
