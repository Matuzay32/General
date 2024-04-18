import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class CardProvider {
  @Prop({ required: true })
  cardProviderName: string;
  @Prop({ required: true })
  credentials: string;
}
export const CardProviderSchema = SchemaFactory.createForClass(CardProvider);
