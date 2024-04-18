import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class WalletStockPolicy {
  @Prop({ required: true })
  creditTopictName: string;

  @Prop({ required: true })
  policyName: string;

  @Prop({ required: true })
  policyStartDateCriteria: Date;

  @Prop({ required: true })
  policyEndtDateCriteria: Date;
}
export const WalletStockPolicySchema =
  SchemaFactory.createForClass(WalletStockPolicy);
