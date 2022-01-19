import { ObjectId } from 'mongoose';

export class CreateClassDto {
  readonly id: ObjectId;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly data_init: Date;
  readonly data_end: Date;
  readonly total_comments: number;
}
