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
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }
  @Get()
  async cgetUser() {
    return this.appService.getUser();
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateDto: UserUpdateDto) {
    return this.appService.updateUser(id, updateDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
