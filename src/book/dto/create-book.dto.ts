// export class CreateBookDto {
//     book_id: number;
//     book_name: string;
//     book_author: string;
//     book_price: number;
//     book_image: string;
//     book_isbn: string;
// }
import { IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreateBookDto {
    @IsNotEmpty()
    book_id: number;
    @IsNotEmpty()
    @IsString()
    book_name: string;
    @IsNotEmpty()
    @IsString()
    book_author: string;
    @IsNotEmpty()
    @IsInt()
    book_price: number;
    @IsNotEmpty()
    @IsString()
    book_image: string;
    @IsNotEmpty()
    @IsString()
    book_isbn: string;
}








