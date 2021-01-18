import axios from "axios";
import {
  CartActions,
  ShippingAddressAction,
  PaymentMethodAction,
} from "../enums";
import { ActionType, Product, ShippingAddress } from "../types";

export const addToCart = (id: string, qty: number): ActionType => async (
  dispatch,
  getState
) => {
  const { data } = await axios.get<Product>(`/api/products/${id}`);

  dispatch({
    type: CartActions.CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().Cart.cartItems));
};

export const removeFromCart = (id: string): ActionType => async (
  dispatch,
  getState
) => {
  dispatch({
    type: CartActions.CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().Cart.cartItems));
};

export const saveShippingAddress = (
  data: ShippingAddress
): ActionType => async (dispatch) => {
  dispatch({
    type: ShippingAddressAction.CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data: string): ActionType => async (
  dispatch
) => {
  dispatch({
    type: PaymentMethodAction.CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
