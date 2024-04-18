import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class CardProviderZipcode {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cardproviders',
  })
  cardProviderId: string;

  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'zipcodes',
  })
  zipcodeId: string;
  @Prop({ required: true })
  equivalenceId: string;
}
export const CardProviderZipcodeSchema =
  SchemaFactory.createForClass(CardProviderZipcode);
