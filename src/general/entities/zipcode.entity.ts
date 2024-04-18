import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class Zipcode {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cities',
  })
  cityid: string;
  @Prop({ required: true })
  zipCode: string;
}
export const ZipcodeSchema = SchemaFactory.createForClass(Zipcode);
