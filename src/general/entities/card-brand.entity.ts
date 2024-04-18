import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class CardBrand {
  @Prop({ required: true })
  cardBrandName: string;
  @Prop({ required: true })
  cardBrandLogo: string;
}
export const CardBrandSchema = SchemaFactory.createForClass(CardBrand);
