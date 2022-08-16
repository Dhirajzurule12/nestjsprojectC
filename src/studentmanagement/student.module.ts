import { Module } from '@nestjs/common';
import { StudentsService } from './Services/student.service';

import {StudentsController } from './controllers/student.controller';

@Module({
  providers: [StudentsService],
  controllers: [ StudentsController],
})
export class StudentModule {}
