import { Action } from "redux";
import { IProduct } from "../interfaces";
import { ProductList } from "./constants";

export interface ProductState {
  products: IProduct[];
}

interface IGetProductAction extends Action {
  type: typeof ProductList.PRODUCT_LIST_REQUEST;
  payload?: IProduct[];
}

interface IGetProductSuccessAction extends Action {
  type: typeof ProductList.PRODUCT_LIST_SUCCESS;
  payload: IProduct[];
}

interface IGetProductFailAction extends Action {
  type: typeof ProductList.PRODUCT_LIST_FAIL;
  payload: String;
}

export type ProductListActionTypes =
  | IGetProductAction
  | IGetProductSuccessAction
  | IGetProductFailAction;
