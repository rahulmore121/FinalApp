/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;
@Schema()
export class Book {
  @Prop()
  name: string;
  @Prop()
  quantity: string;
  @Prop()
  price: string;
}
export const BookSchema = SchemaFactory.createForClass(Book);
