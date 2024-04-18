import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class CreditTopic {
  @Prop({ required: true })
  creditTopictName: string;
}
export const CreditTopicSchema = SchemaFactory.createForClass(CreditTopic);
