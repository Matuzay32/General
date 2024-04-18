import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class CardPlasticStock {
  @Prop({ required: true, type: Types.ObjectId, ref: 'cardtypes' })
  cardTypeId: string;
  @Prop({ required: true })
  cardPAN: string;

  @Prop({ required: true })
  cardSecurityCode: string;

  @Prop({ required: true })
  cardActivationCode: string;

  @Prop({ required: true })
  cardExpirationDate: Date;

  @Prop({ enum: ['A', 'P'] })
  status: string;
}
export const CardPlasticStockSchema =
  SchemaFactory.createForClass(CardPlasticStock);
