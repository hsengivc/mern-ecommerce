import { Action } from "redux";
import { CartActionTypes } from "../enums";

export interface Cart {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

export interface CartAddItemAction {
  type: CartActionTypes.CART_ADD_ITEM;
  payload: Cart;
}

export interface CartRemoveItemAction {
  type: CartActionTypes.CART_REMOVE_ITEM;
  payload: string;
}

export type CartItemAction = CartAddItemAction | CartRemoveItemAction;
