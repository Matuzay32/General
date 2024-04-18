import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class CardType {
  @Prop({ require: true })
  cardTypeName: string;
  @Prop({ type: Types.ObjectId, required: true, ref: 'cardproviders' })
  cardProviderId: string;
  @Prop({ type: Types.ObjectId, required: true, ref: 'cardproducts' })
  cardProductid: string;
  @Prop({ type: Types.ObjectId, required: true, ref: 'cardbrands' })
  cardBrandId: string;
  @Prop({ required: true })
  GAF: string;
  @Prop({ required: true })
  BIN: string;
}
export const CardTypeSchema = SchemaFactory.createForClass(CardType);
