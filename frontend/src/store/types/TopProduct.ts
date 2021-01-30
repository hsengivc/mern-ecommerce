import { Product } from ".";
import { TopProductActions } from "../enums";

export interface ProductTopRequestAction {
  type: TopProductActions.PRODUCT_TOP_REQUEST;
}

export interface ProductTopSuccessAction {
  type: TopProductActions.PRODUCT_TOP_SUCCESS;
  payload: Product[];
}

export interface ProductTopFailAction {
  type: TopProductActions.PRODUCT_TOP_FAIL;
  payload: any;
}

export type TopProductActionTypes =
  | ProductTopSuccessAction
  | ProductTopFailAction
  | ProductTopRequestAction;
