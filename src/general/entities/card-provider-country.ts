import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class CardProviderCountry {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cardproviders',
  })
  cardProviderId: string;

  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'countries',
  })
  countryId: string;
  @Prop({ required: true })
  equivalenceId: string;
}
export const CardProviderCountrySchema =
  SchemaFactory.createForClass(CardProviderCountry);
