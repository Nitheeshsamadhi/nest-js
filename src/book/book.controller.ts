import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBook } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookServie: BookService) {}

  @Get()
  getbooks() {
    return this.bookServie.findAllBooks();
  }

  @Post()
  async create(@Body() body: CreateBookDto) {
    return await this.bookServie.createBook(body);
  }
  @Get(':id')
  findone(@Param('id') id: string) {
    return this.bookServie.findByID(id);
  }

  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() body: UpdateBook,
  ): Promise<Book> {
    return this.bookServie.updateUser(id, body);
  }

  @Delete(':id')
  deleteuser(@Param('id') id:string){
    return this.bookServie.deleteUser(id)
  }
}
