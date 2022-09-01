import { PartialType } from '@nestjs/mapped-types';
import { CreateBookCategoryDto } from './create-bookcategory.dto';

export class UpdateBookcategoryDto extends PartialType(CreateBookCategoryDto) {
  bookcategory_id?: number;
  book_category:string;
}