import { PaymentResult } from ".";
import { OrderListActions } from "../enums";
import { Order } from "./Order";

export interface OrderList extends Order {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: string;
  deliveredAt?: string;
  createdAt: string;
  paymentResult?: PaymentResult;
}

export interface OrderListRequestAction {
  type: OrderListActions.ORDER_LIST_REQUEST;
}

export interface OrderListSuccessAction {
  type: OrderListActions.ORDER_LIST_SUCCESS;
  payload: OrderList[];
}

export interface OrderListFailAction {
  type: OrderListActions.ORDER_LIST_FAIL;
  payload: any;
}

export type OrderListActionTypes =
  | OrderListRequestAction
  | OrderListSuccessAction
  | OrderListFailAction;
