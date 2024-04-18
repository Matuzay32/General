import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class CardProviderState {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cardproviders',
  })
  cardProviderId: string;

  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'states',
  })
  stateId: string;
  @Prop({ required: true })
  equivalenceId: string;
}
export const CardProviderStateSchema =
  SchemaFactory.createForClass(CardProviderState);
