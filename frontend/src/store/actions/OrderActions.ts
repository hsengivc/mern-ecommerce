import axios from "axios";
import {
  CartActions,
  CreateOrderAction,
  OrderDetailsAction,
  OrderPayAction,
} from "../enums";
import {
  ActionType,
  Order,
  CreateOrder,
  OrderDetails,
  PaymentResult,
} from "../types";
import { errorHandler } from "../utils";

export const createOrder = (order: Order): ActionType => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: CreateOrderAction.ORDER_CREATE_REQUEST });
    const { userInfo } = getState().UserLogin;
    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    const { data } = await axios.post<CreateOrder>(
      `/api/orders`,
      order,
      config
    );
    dispatch({
      type: CreateOrderAction.ORDER_CREATE_SUCCESS,
      payload: data,
    });
    localStorage.removeItem("cartItems");
    dispatch({
      type: CartActions.CART_ITEMS_RESET,
    });
  } catch (error) {
    dispatch({
      type: CreateOrderAction.ORDER_CREATE_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const getOrderDetails = (id: string): ActionType => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: OrderDetailsAction.ORDER_DETAILS_REQUEST });
    const { userInfo } = getState().UserLogin;
    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    const { data } = await axios.get<OrderDetails>(`/api/orders/${id}`, config);
    dispatch({
      type: OrderDetailsAction.ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderDetailsAction.ORDER_DETAILS_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const payOrder = (
  orderId: string,
  paymentResult: PaymentResult
): ActionType => async (dispatch, getState) => {
  try {
    dispatch({ type: OrderPayAction.ORDER_PAY_REQUEST });
    const { userInfo } = getState().UserLogin;
    const config = {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config);
    dispatch({
      type: OrderPayAction.ORDER_PAY_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: OrderPayAction.ORDER_PAY_FAIL,
      payload: errorHandler(error),
    });
  }
};
