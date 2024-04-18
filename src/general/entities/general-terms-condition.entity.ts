import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class GeneralTermsCondition {
  @Prop({ required: true })
  termsText: string;

  @Prop({ required: true })
  termsVersion: string;

  @Prop({ required: true })
  termsValidFromDateTime: Date;

  @Prop({ required: true })
  termsStatus: string;
}

export const GeneralTermsConditionSchema = SchemaFactory.createForClass(
  GeneralTermsCondition
);
