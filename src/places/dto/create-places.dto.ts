import { ObjectId } from 'mongoose';

export class CreatePlacesDto {
  readonly id: ObjectId;
  readonly name: string;
  photo: string;
}
