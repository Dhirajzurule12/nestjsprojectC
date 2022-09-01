import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
        book_id: number;
        book_name: string;
        book_author?: string;
        book_price: number;
        book_image: string;
        book_isbn: string;
}