import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Product } from "./Product";

export interface ProductListState {
  loading: boolean;
  products: Product[];
  error?: undefined;
}

export interface ProductDetailsState {
  loading: boolean;
  product?: Product;
  error?: undefined;
}

export interface States {
  ProductList: ProductListState;
  ProductDetails: ProductDetailsState;
}

export type DispatchType = ThunkDispatch<States, unknown, Action<string>>;

export type ActionType = ThunkAction<
  Promise<void>,
  States,
  unknown,
  Action<string>
>;
