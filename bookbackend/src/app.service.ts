import { Injectable } from '@nestjs/common';
import { Book, BookDocument } from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('book') private readonly bookModel: Model<BookDocument>,
  ) {}

  async createBook(book: Book) {
    const newBook = new this.bookModel(book);
    newBook.save();
    return 'Book added sucessfully';
  }

  async getBook() {
    return this.bookModel
      .find({})
      .then((book) => {
        return book;
      })
      .catch((err) => {
        return 'No Book Found';
      });
  }

  async updateBook(id, data) {
    return this.bookModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteBook(id) {
    return this.bookModel.findByIdAndDelete(id);
  }
}
