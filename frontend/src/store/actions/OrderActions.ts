import axios from "axios";
import { CartActions, CreateOrderAction, OrderDetailsAction } from "../enums";
import { ActionType, Order, CreateOrder, OrderDetails } from "../types";
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
