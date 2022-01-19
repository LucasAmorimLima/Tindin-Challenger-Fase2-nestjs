import { ObjectId } from 'mongoose';

export class CreateCommentsDto {
  readonly id_class: ObjectId;
  readonly id: ObjectId;
  readonly comment: string;
}
