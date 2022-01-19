import { Injectable } from '@nestjs/common';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comments, CommentsDocument } from './schemas/comments.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private commentsModel: Model<CommentsDocument>,
  ) {}

  async create(createCommentsDto: CreateCommentsDto): Promise<Comments> {
    const createdComments = new this.commentsModel(createCommentsDto);
    return createdComments.save();
  }

  async findAll(): Promise<Comments[]> {
    return this.commentsModel.find().exec();
  }

  async remove(id: number) {
    return this.commentsModel.deleteOne({ _id: id }).exec();
  }
}
