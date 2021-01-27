import { Product } from ".";
import { ProductUpdateActions } from "../enums";

export interface UpdateProductInput {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
}

export interface ProductUpdateRequestAction {
  type: ProductUpdateActions.PRODUCT_UPDATE_REQUEST;
}

export interface ProductUpdateSuccessAction {
  type: ProductUpdateActions.PRODUCT_UPDATE_SUCCESS;
  payload: Product;
}

export interface ProductUpdateFailAction {
  type: ProductUpdateActions.PRODUCT_UPDATE_FAIL;
  payload: any;
}

export interface ProductUpdateResetAction {
  type: ProductUpdateActions.PRODUCT_UPDATE_RESET;
}

export type ProductUpdateActionTypes =
  | ProductUpdateRequestAction
  | ProductUpdateSuccessAction
  | ProductUpdateFailAction
  | ProductUpdateResetAction;
