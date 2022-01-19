import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentsDocument = Comments & Document;

@Schema()
export class Comments {
  @Prop({ required: true })
  id_class: string;

  @Prop({ required: true })
  comment: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
