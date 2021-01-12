import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Cart } from ".";
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

export interface CartItemsState {
  cartItems: Cart[];
}

export interface ReduxStates {
  ProductList: ProductListState;
  ProductDetails: ProductDetailsState;
  Cart: CartItemsState;
}

export type DispatchType = ThunkDispatch<ReduxStates, unknown, Action<string>>;

export type ActionType = ThunkAction<
  Promise<void>,
  ReduxStates,
  unknown,
  Action<string>
>;
