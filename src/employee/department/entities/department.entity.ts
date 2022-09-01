import { IsNotEmpty, IsString } from 'class-validator';
import { EmployeePostEntity } from 'src/employee/modules/post_entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('department')
export class Department {
  @PrimaryGeneratedColumn()
  dept_id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  dept_name: string;

  @ManyToMany((type) => EmployeePostEntity, (emp) => emp.dept)
  employee: EmployeePostEntity[];
}
