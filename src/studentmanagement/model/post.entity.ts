// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity('student_post')
// export class StudentPostEntity{
//     @PrimaryGeneratedColumn()
//     id:number;

//     @Column({ default:''})
//     body:string;

//     @Column({type:'timestamp', default:()=>'CURRENT_TIMESTAMP'})
//     createdAt:Date;

// }
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StudentPost } from '../model/post.interface';
@Entity('Student')
export class StudentPostEntity implements StudentPost {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ default: '' })
  firstname: string;
  @Column({ default: '' })
  lastname: string;
  // @Column({ type: 'bigint', default: null })
  @Column({ type: 'int' })
  mobile: number;
  @Column({ default: '' })
  email: string;
  @Column({ default: '' })
  address: string;
}
