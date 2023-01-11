import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './user.models';
import { BookUpdateDto } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createBook(@Body() bookDto: Book) {
    return this.appService.createBook(bookDto);
  }
  @Get()
  async getBook() {
    return this.appService.getBook();
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() updateDto: BookUpdateDto) {
    return this.appService.updateBook(id, updateDto);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.appService.deleteBook(id);
  }
}
