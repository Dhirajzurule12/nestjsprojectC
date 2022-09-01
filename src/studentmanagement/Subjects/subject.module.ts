import { Module } from '@nestjs/common';

import { SubjectService } from './subject.service';
import { SubjectPostEntity } from './subject.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectController } from './subject.controller';


@Module({
    imports:[
       TypeOrmModule.forFeature([SubjectPostEntity]) 
    ],
  providers: [SubjectService],
  controllers: [ SubjectController],
})
export class SubjectModule {}
