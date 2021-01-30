import { Model, Document } from "mongoose";
import { UserDocument } from ".";

export interface IProduct {
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface IReview {
  user: string;
  name: string;
  rating: number;
  comment: string;
}

export interface ProductWithReview extends IProduct {
  user: UserDocument;
  reviews: IReview[];
}

export interface IProductDocument extends ProductWithReview, Document {}

export interface ProductModel extends Model<IProductDocument> {}
