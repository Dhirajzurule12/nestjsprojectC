import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Department } from '../department/entities/department.entity';

@Entity('employee_tbl')
export class EmployeePostEntity {
  @PrimaryGeneratedColumn()
  emp_id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  emp_name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  emp_gender: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  emp_address: string;

  @Column()
  @IsNotEmpty()
  emp_contact: number;

  @Column()
  @IsNotEmpty()
  @IsInt()
  emp_salary: number;

  // @Column()
  // @IsNotEmpty()
  // @IsString()
  // emp_dept: string;

  // dept: any;

  @ManyToMany((type) => Department, (dept) => dept.employee, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  dept: Department[];
}
