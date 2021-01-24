import { Order, PaymentResult } from ".";
import { MyOrderListAction } from "../enums";

export interface MyOrderList extends Order {
  _id: string;
  user: string;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: string;
  deliveredAt?: string;
  createdAt: string;
  paymentResult?: PaymentResult;
}

export interface MyOrderListRequestAction {
  type: MyOrderListAction.MY_ORDER_LIST_REQUEST;
}

export interface MyOrderListSuccessAction {
  type: MyOrderListAction.MY_ORDER_LIST_SUCCESS;
  payload: MyOrderList[];
}

export interface MyOrderListFailureAction {
  type: MyOrderListAction.MY_ORDER_LIST_FAIL;
  payload: any;
}

export interface MyOrderListResetAction {
  type: MyOrderListAction.MY_ORDER_LIST_RESET;
}

export type MyOrderListActionType =
  | MyOrderListRequestAction
  | MyOrderListSuccessAction
  | MyOrderListFailureAction
  | MyOrderListResetAction;
