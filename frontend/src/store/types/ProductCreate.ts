import { Product } from ".";
import { ProductCreateActions } from "../enums";

export interface ProductCreateRequestAction {
  type: ProductCreateActions.PRODUCT_CREATE_REQUEST;
}

export interface ProductCreateSuccessAction {
  type: ProductCreateActions.PRODUCT_CREATE_SUCCESS;
  payload: Product;
}

export interface ProductCreateFailAction {
  type: ProductCreateActions.PRODUCT_CREATE_FAIL;
  payload: any;
}

export interface ProductCreateResetAction {
  type: ProductCreateActions.PRODUCT_CREATE_RESET;
}

export type ProductCreateActionTypes =
  | ProductCreateRequestAction
  | ProductCreateSuccessAction
  | ProductCreateFailAction
  | ProductCreateResetAction;
