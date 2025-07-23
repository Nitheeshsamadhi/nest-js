import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BookDocument = Book & Document;
@Schema({
    timestamps:true,
})

export class Book {
    @Prop({required:true})
    title:string;

    @Prop()
    author:string;

    @Prop()
    price:number;

    @Prop({enum:["comic","drama","classic","fantasy"],default:"drama"})
    category:string;
}
export const BookSchema = SchemaFactory.createForClass(Book)