import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class Country {
  @Prop({ required: true })
  countryName: string;
}
export const CountrySchema = SchemaFactory.createForClass(Country);
