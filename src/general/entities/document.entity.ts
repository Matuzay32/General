import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class DocumentType {
  @Prop({ required: true })
  docTypeName: string;
}

export const DocumentTypeSchema = SchemaFactory.createForClass(DocumentType);
