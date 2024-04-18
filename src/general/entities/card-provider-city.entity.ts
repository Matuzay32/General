import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class CardProviderCity {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cardproviders',
  })
  cardProviderId: string;

  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cities',
  })
  cityId: string;
  @Prop({ required: true })
  equivalenceId: string;
}
export const CardProviderCitySchema =
  SchemaFactory.createForClass(CardProviderCity);
