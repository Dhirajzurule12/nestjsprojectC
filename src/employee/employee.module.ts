import { Module } from '@nestjs/common';
import { EmployeeService } from './services/employee.service';
import { EmployeeController } from './controllers/employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeePostEntity } from './modules/post_entity';
// import { EmployeeDeptEntity } from './modules/dept_entity';

import { DepartmentModule } from './department/department.module';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeePostEntity]), DepartmentModule],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}