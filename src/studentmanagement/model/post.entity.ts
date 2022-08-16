import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('student_post')
export class StudentPostEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ default:''})
    body:string;


    @Column({type:'timestamp', default:()=>'CURRENT_TIMESTAMP'})
    createdAt:Date;
    
}