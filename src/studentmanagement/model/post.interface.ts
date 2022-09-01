// export interface StudentPost{
//     id?:number;
//     body?:string;
//     createdAt?:Date;

import { IsEmail, IsString } from 'class-validator';

// }
export class StudentPost {
  @IsString()
  firstname?: string;

  @IsString()
  lastname?: string;



  @IsEmail()
  email?: string;

  @IsString()
  address?: string;
}
