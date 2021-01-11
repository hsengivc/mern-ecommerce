import { Action } from "redux";
import { Product } from "./Product";
import { ProductDetailsActionTypes } from "../enums";

export interface ProductDetailsRequestAction extends Action {
  type: typeof ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST;
}

export interface ProductDetailsSuccessAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS;
  payload: Product;
}

export interface ProductDetailsFailureAction {
  type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAIL;
  payload: any;
}

export type ProductDetailsAction =
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailureAction;
