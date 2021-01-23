import { OrderPayAction } from "../enums";

export interface PaymentResult {
  id: string;
  status: string;
  update_time: string;
  payer: { email_address: string };
}

export interface OrderPayRequestAction {
  type: OrderPayAction.ORDER_PAY_REQUEST;
}

export interface OrderPaySuccessAction {
  type: OrderPayAction.ORDER_PAY_SUCCESS;
}

export interface OrderPayFailureAction {
  type: OrderPayAction.ORDER_PAY_FAIL;
  payload: any;
}

export interface OrderPayResetAction {
  type: OrderPayAction.ORDER_PAY_RESET;
}

export type OrderPayActionType =
  | OrderPayRequestAction
  | OrderPaySuccessAction
  | OrderPayFailureAction
  | OrderPayResetAction;
