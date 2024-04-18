import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class City {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'states',
  })
  stateId: string;
  @Prop({ required: true })
  cityName: string;
}
export const CitySchema = SchemaFactory.createForClass(City);
