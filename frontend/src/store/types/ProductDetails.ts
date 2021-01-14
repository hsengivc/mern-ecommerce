import { Action } from "redux";
import { Product } from "./Product";
import { ProductDetailsActions } from "../enums";

export interface ProductDetailsRequestAction extends Action {
  type: typeof ProductDetailsActions.PRODUCT_DETAILS_REQUEST;
}

export interface ProductDetailsSuccessAction {
  type: ProductDetailsActions.PRODUCT_DETAILS_SUCCESS;
  payload: Product;
}

export interface ProductDetailsFailureAction {
  type: ProductDetailsActions.PRODUCT_DETAILS_FAIL;
  payload: any;
}

export type ProductDetailsAction =
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailureAction;
