import {
  CreateOrderAction,
  MyOrderListAction,
  OrderDeliverActions,
  OrderDetailsAction,
  OrderListActions,
  OrderPayAction,
} from "../enums";
import {
  CreateOrderState,
  MyOrderListState,
  OrderCreateAction,
  OrderDeliverActionTypes,
  OrderDeliverState,
  OrderDetailsState,
  OrderDetaislActionType,
  OrderListActionTypes,
  OrderListState,
  OrderPayActionType,
  OrderPayState,
} from "../types";
import { MyOrderListActionType } from "../types/MyOrderList";

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

const orderPayInitialState: OrderPayState = {
  loading: false,
};

export const orderPayReducer = (
  state = orderPayInitialState,
  action: OrderPayActionType
) => {
  switch (action.type) {
    case OrderPayAction.ORDER_PAY_REQUEST:
      return { loading: true };
    case OrderPayAction.ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case OrderPayAction.ORDER_PAY_FAIL:
      return { loading: false, error: action.payload };
    case OrderPayAction.ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

const myOrderListInitialState: MyOrderListState = {
  loading: false,
  orders: [],
};

export const myOrderListReducer = (
  state: MyOrderListState = myOrderListInitialState,
  action: MyOrderListActionType
) => {
  switch (action.type) {
    case MyOrderListAction.MY_ORDER_LIST_REQUEST:
      return { loading: true, orders: state.orders };
    case MyOrderListAction.MY_ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case MyOrderListAction.MY_ORDER_LIST_FAIL:
      return { loading: false, error: action.payload, orders: state.orders };
    case MyOrderListAction.MY_ORDER_LIST_RESET:
      return { loading: false, orders: [] };
    default:
      return state;
  }
};

const orderListInitialState: OrderListState = {
  orders: [],
  loading: false,
};

export const orderListReducer = (
  state: OrderListState = orderListInitialState,
  action: OrderListActionTypes
) => {
  switch (action.type) {
    case OrderListActions.ORDER_LIST_REQUEST:
      return { loading: true, orders: state.orders };
    case OrderListActions.ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case OrderListActions.ORDER_LIST_FAIL:
      return { loading: false, error: action.payload, orders: state.orders };
    default:
      return state;
  }
};

const orderDeliverInitialState: OrderDeliverState = {
  loading: false,
};

export const orderDeliverReducer = (
  state: OrderDeliverState = orderDeliverInitialState,
  action: OrderDeliverActionTypes
) => {
  switch (action.type) {
    case OrderDeliverActions.ORDER_DELIVER_REQUEST:
      return { ...state, loading: true };
    case OrderDeliverActions.ORDER_DELIVER_SUCCESS:
      return { loading: false, success: true };
    case OrderDeliverActions.ORDER_DELIVER_FAIL:
      return { loading: false, error: action.payload };
    case OrderDeliverActions.ORDER_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};
