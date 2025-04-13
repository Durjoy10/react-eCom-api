import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema({ timestamps: true })
export class Category extends Document {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Category' })
    parentCategory: Category;
}

export const CategorySchema = SchemaFactory.createForClass(Category); 