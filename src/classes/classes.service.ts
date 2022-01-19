import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
//import { UpdateClassDto } from './dto/update-class.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Classes, ClassesDocument } from './schemas/class.schema';
import { Model } from 'mongoose';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(Classes.name) private classesModel: Model<ClassesDocument>,
  ) {}

  async create(createClassDto: CreateClassDto): Promise<Classes> {
    const createdClasses = new this.classesModel(createClassDto);
    return createdClasses.save();
  }

  async findAll(): Promise<Classes[]> {
    return this.classesModel.find().exec();
  }

  async findOne(id: number): Promise<Classes> {
    return this.classesModel.findOne({ _id: id }).exec();
  }

  async update(id: number, _updateClassDto: UpdateClassDto) {
    return this.classesModel
      .updateOne({ _id: _updateClassDto.id }, _updateClassDto)
      .exec();
  }

  async remove(id: number) {
    return this.classesModel.deleteOne({ _id: id }).exec();
  }
}
