import { CreateOrderAction, OrderDetailsAction } from "../enums";
import {
  CreateOrderState,
  OrderCreateAction,
  OrderDetailsState,
  OrderDetaislActionType,
} from "../types";

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

const orderDetailsInitialState: OrderDetailsState = {
  loading: false,
};

export const orderDetailsReducer = (
  state = orderDetailsInitialState,
  action: OrderDetaislActionType
) => {
  switch (action.type) {
    case OrderDetailsAction.ORDER_DETAILS_REQUEST:
      return { ...state, loading: false };
    case OrderDetailsAction.ORDER_DETAILS_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case OrderDetailsAction.ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
