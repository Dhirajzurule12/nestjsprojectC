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
import { Subject } from 'rxjs';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudentPost } from '../model/post.interface';
import { SubjectPostEntity } from '../Subjects/subject.entity';


@Entity('student')
export class StudentPostEntity implements StudentPost {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  // @Column({ type: 'bigint', default: null })

  @Column()
  email: string;
  @Column()
  address: string;

  @ManyToMany(() => SubjectPostEntity)
  // @JoinTable()
  categories:SubjectPostEntity[]
}
