import { Product } from "./Product";
import { ProductListActions } from "../enums";

export interface ProductsListRequestAction {
  type: ProductListActions.PRODUCT_LIST_REQUEST;
}

export interface ProductsListSuccessAction {
  type: ProductListActions.PRODUCT_LIST_SUCCESS;
  payload: { products: Product[]; pages: number; page: number };
}

export interface ProductsListFailureAction {
  type: ProductListActions.PRODUCT_LIST_FAIL;
  payload: any;
}

export type ProductListAction =
  | ProductsListRequestAction
  | ProductsListSuccessAction
  | ProductsListFailureAction;
