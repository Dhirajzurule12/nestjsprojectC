import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employee_tbl')
export class EmployeePostEntity {
  @PrimaryGeneratedColumn()
  emp_id: number;

  @Column({ default: '' })
  @IsNotEmpty()
  @IsString()
  emp_name: string;

  @Column({ default: '' })
  @IsNotEmpty()
  @IsString()
  emp_gender: string;

  @Column({ default: '' })
  @IsNotEmpty()
  @IsString()
  emp_address: string;

  @Column({ type: 'integer', default: null })
  @IsNotEmpty()
  @IsInt()
  emp_contact: number;

  @Column({ type: 'int', default: null })
  @IsNotEmpty()
  @IsInt()
  emp_salary: number;

  @Column({ default: '' })
  @IsNotEmpty()
  @IsString()
  emp_dept: string;

  @Column({ default: '' })
  @IsNotEmpty()
  @IsString()
  emp_image: string;
}
