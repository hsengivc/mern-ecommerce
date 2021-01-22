import { Order } from ".";
import { OrderDetailsAction } from "../enums";

export interface OrderDetails extends Order {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: string;
  deliveredAt?: string;
}
export interface OrderDetailsRequestAction {
  type: OrderDetailsAction.ORDER_DETAILS_REQUEST;
}

export interface OrderDetailsSuccessAction {
  type: OrderDetailsAction.ORDER_DETAILS_SUCCESS;
  payload: OrderDetails;
}

export interface OrderDetailsFailureAction {
  type: OrderDetailsAction.ORDER_DETAILS_FAIL;
  payload: any;
}

export type OrderDetaislActionType =
  | OrderDetailsRequestAction
  | OrderDetailsSuccessAction
  | OrderDetailsFailureAction;
