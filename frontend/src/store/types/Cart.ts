import { Action } from "redux";
import { CartActions, ShippingAddressAction } from "../enums";

export interface Cart {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
export interface CartAddItemAction {
  type: CartActions.CART_ADD_ITEM;
  payload: Cart;
}

export interface CartRemoveItemAction {
  type: CartActions.CART_REMOVE_ITEM;
  payload: string;
}

export interface SaveShippingAddressAction {
  type: ShippingAddressAction.CART_SAVE_SHIPPING_ADDRESS;
  payload: ShippingAddress;
}

export type CartItemAction =
  | CartAddItemAction
  | CartRemoveItemAction
  | SaveShippingAddressAction;
