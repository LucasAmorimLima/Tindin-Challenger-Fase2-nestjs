import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlacesDocument = Places & Document;

@Schema()
export class Places {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  photo: string;
}

export const PlacesSchema = SchemaFactory.createForClass(Places);
