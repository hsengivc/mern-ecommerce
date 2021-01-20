import { Cart, ShippingAddress } from ".";
import { CreateOrderAction } from "../enums";

export interface Order {
  orderItems: Cart[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
}

export interface CreateOrder extends Order {
  _id: string;
  user: string;
}

export interface CreateOrderRequestAction {
  type: CreateOrderAction.ORDER_CREATE_REQUEST;
}

export interface CreateOrderSuccessAction {
  type: CreateOrderAction.ORDER_CREATE_SUCCESS;
  payload: CreateOrder;
}

export interface CreateOrderFailureAction {
  type: CreateOrderAction.ORDER_CREATE_FAIL;
  payload: any;
}

export type OrderCreateAction =
  | CreateOrderRequestAction
  | CreateOrderSuccessAction
  | CreateOrderFailureAction;
