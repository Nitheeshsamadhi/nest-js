import { PartialType } from "@nestjs/mapped-types";
import { CreateBookDto } from "./create-book.dto";

export class UpdateBook extends PartialType(CreateBookDto)  {


}