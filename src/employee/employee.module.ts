import { Module } from '@nestjs/common';
import { EmployeeService } from './services/employee.service';
import { EmployeeController } from './controllers/employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeePostEntity } from './modules/post_entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([EmployeePostEntity])
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
