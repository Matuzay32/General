import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class State {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'countries',
  })
  countryId: string;
  @Prop({ required: true })
  stateName: string;
}
export const StateSchema = SchemaFactory.createForClass(State);
