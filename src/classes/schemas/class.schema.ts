import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClassesDocument = Classes & Document;

@Schema()
export class Classes {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  data_init: Date;

  @Prop({ required: true })
  data_end: Date;

  @Prop({ required: true })
  total_comments: number;
}

export const ClassesSchema = SchemaFactory.createForClass(Classes);
