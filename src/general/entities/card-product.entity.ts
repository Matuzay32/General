import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class CardProduct {
  @Prop({ required: true })
  cardProductName: string;
}
export const CardProductSchema = SchemaFactory.createForClass(CardProduct);
