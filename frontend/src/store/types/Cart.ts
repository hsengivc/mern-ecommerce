import { Action } from "redux";
import { CartActions } from "../enums";

export interface Cart {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

export interface CartAddItemAction {
  type: CartActions.CART_ADD_ITEM;
  payload: Cart;
}

export interface CartRemoveItemAction {
  type: CartActions.CART_REMOVE_ITEM;
  payload: string;
}

export type CartItemAction = CartAddItemAction | CartRemoveItemAction;
