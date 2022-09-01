// export interface StudentPost{
//     id?:number;
//     body?:string;
//     createdAt?:Date;

import { IsEmail, IsNumber, IsString } from "class-validator";

// }
export class StudentPost {
    @IsString()
  firstname?: string;

  @IsString()
  lastname?: string;

  @IsNumber()
  mobile?: number;

  @IsEmail()
  email?: string;

  @IsString()
  address?: string;
}
