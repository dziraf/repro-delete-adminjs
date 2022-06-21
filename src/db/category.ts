import { model, Schema } from 'mongoose';

export interface ICategory {
  title: string;
  nested: {
    field: string;
    value: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export const CategorySchema = new Schema<ICategory>(
  {
    title: { type: 'String', required: true },
    nested: new Schema({ field: 'String', value: 'String' }),
  },
  { timestamps: true }
);

export const Category = model<ICategory>('Category', CategorySchema);
