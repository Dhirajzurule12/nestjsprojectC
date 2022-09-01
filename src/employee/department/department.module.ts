import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeePostEntity } from '../modules/post_entity';
import { Department } from './entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeePostEntity, Department])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
