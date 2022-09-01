
export class CreateBookCategoryDto {
  bookcategory_id:number;
  book_category:string;
  // @ManyToMany(() => bookcategory)
  //   @JoinTable()
  //   categories: bookcategory[]
}