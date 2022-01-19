import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async getByEmail(email: string) {
    return await this.usersModel.findOne({ email }).exec();
  }
  async getById(id: string) {
    return await this.usersModel.findById(id).exec();
  }
}
