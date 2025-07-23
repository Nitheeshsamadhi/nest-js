import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schema/book.schema';
import { Model } from 'mongoose';  



@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private BookModel: Model<Book>, 
    ) {}

    async findAllBooks(): Promise<Book[]> {
        return await this.BookModel.find().exec();  
    }

    async createBook(body: any): Promise<Book> {
        return await this.BookModel.create(body);  
    }
    async findByID(id:string) : Promise<Book>{
        const book = await this.BookModel.findById(id);
        if(!book){
            throw new NotFoundException("book not found")
        }
        return book;
    }

 async updateUser(id: string, body: Partial<Book>): Promise<Book> {
  const user = await this.BookModel.findByIdAndUpdate(id, body, { new: true });

  if (!user) {
    throw new NotFoundException('Book not found');
  }

  return user;

}

async deleteUser (id:string):Promise<Book>{
    const user = await this.BookModel.findByIdAndDelete(id)
    if(!user){
        throw new NotFoundException("user not found")
    }
    return user;
}

}
