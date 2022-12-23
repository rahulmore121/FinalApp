import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(user: User) {
    const newUser = new this.userModel(user);
    newUser.save();
    return 'User added sucessfully';
  }

  async getUser() {
    return this.userModel
      .find({})
      .then((user) => {
        return user;
      })
      .catch((err) => {
        return 'No user Found';
      });
  }

  async updateUser(id, data) {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteUser(id) {
    return this.userModel.findByIdAndDelete(id);
  }
}
