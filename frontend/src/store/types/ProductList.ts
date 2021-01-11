import { Product } from "./Product";
import { ProductListActionTypes } from "../enums";

export interface ProductsListRequestAction {
  type: ProductListActionTypes.PRODUCT_LIST_REQUEST;
}

export interface ProductsListSuccessAction {
  type: ProductListActionTypes.PRODUCT_LIST_SUCCESS;
  payload: Product[];
}

export interface ProductsListFailureAction {
  type: ProductListActionTypes.PRODUCT_LIST_FAIL;
  payload: any;
}

export type ProductListAction =
  | ProductsListRequestAction
  | ProductsListSuccessAction
  | ProductsListFailureAction;
