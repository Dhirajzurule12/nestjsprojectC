import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
        book_id: number;
        book_name: string;
        author: string;
        price: number;
        book_image: string;
        book_isbn: string;
    
    
}
