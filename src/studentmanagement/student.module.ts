import { Module } from '@nestjs/common';
import { ControllersService } from './controllers/student.service';

@Module({
  providers: [ControllersService]
})
export class StudentModule {}
