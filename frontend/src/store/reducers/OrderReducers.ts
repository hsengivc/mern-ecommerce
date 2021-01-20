import { CreateOrderAction } from "../enums";
import { CreateOrderState, OrderCreateAction } from "../types";

const orderCreateInitialState: CreateOrderState = {
  loading: false,
};

export const orderCreateReducer = (
  state = orderCreateInitialState,
  action: OrderCreateAction
) => {
  switch (action.type) {
    case CreateOrderAction.ORDER_CREATE_REQUEST:
      return { loading: true };
    case CreateOrderAction.ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case CreateOrderAction.ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
