import { OrderDeliverActions } from "../enums";

export interface OrderDeliverRequestAction {
  type: OrderDeliverActions.ORDER_DELIVER_REQUEST;
}

export interface OrderDeliverSuccessAction {
  type: OrderDeliverActions.ORDER_DELIVER_SUCCESS;
}

export interface OrderDeliverFailAction {
  type: OrderDeliverActions.ORDER_DELIVER_FAIL;
  payload: any;
}

export interface OrderDeliverResetAction {
  type: OrderDeliverActions.ORDER_DELIVER_RESET;
}

export type OrderDeliverActionTypes =
  | OrderDeliverRequestAction
  | OrderDeliverSuccessAction
  | OrderDeliverFailAction
  | OrderDeliverResetAction;
