import { Model, Document } from "mongoose";
import { IUserDocument } from ".";

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
  name: string;
  rating: string;
  comment: string;
}

export interface ProductWithReview extends IProduct {
  user: IUserDocument;
  reviews: IReview[];
}

export interface IProductDocument extends ProductWithReview, Document {}
export interface IProductModel extends Model<IProductDocument> {}
