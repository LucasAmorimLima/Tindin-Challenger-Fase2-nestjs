import { ObjectId } from 'mongoose';

export class CreateUsersDto {
  readonly name: ObjectId;
  readonly id: ObjectId;
  readonly email: string;
  readonly password: string;
}
