import { Module } from '@nestjs/common';
import { StudentsService } from './Services/student.service';
import { StudentPostEntity } from './model/post.entity';
import {StudentsController } from './controllers/student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[
       TypeOrmModule.forFeature([StudentPostEntity]) 
    ],
  providers: [StudentsService],
  controllers: [ StudentsController],
})
export class StudentModule {}
