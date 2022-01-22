import { Injectable } from '@nestjs/common';
import { CreatePlacesDto } from './dto/create-places.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Places, PlacesDocument } from './schemas/place.schema';
import { Model, ObjectId } from 'mongoose';
import { UpdatePlacesDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Places.name) private placesModel: Model<PlacesDocument>,
  ) {}

  async create(createPlacesDto: CreatePlacesDto): Promise<Places> {
    const createdPlaces = new this.placesModel(createPlacesDto);
    return createdPlaces.save();
  }

  async findAll(search: string | undefined): Promise<Places[]> {
    if (search) {
      return this.placesModel
        .find({ name: { $regex: search } })
        .limit(50)
        .sort('name');
    } else {
      return this.placesModel.find().limit(50).sort('name');
    }
  }

  async findOne(id: ObjectId): Promise<Places> {
    return this.placesModel.findOne({ _id: id }).exec();
  }

  async update(id: ObjectId, _updatePlacesDto: UpdatePlacesDto) {
    return this.placesModel.updateOne({ _id: id }, _updatePlacesDto).exec();
  }

  async remove(id: ObjectId) {
    return this.placesModel.deleteOne({ _id: id }).exec();
  }
}
