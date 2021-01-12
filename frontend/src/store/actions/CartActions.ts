import axios from "axios";
import { CartActionTypes } from "../enums";
import { ActionType, Product } from "../types";

export const addToCart = (id: string, qty: number): ActionType => async (
  dispatch,
  getState
) => {
  const { data } = await axios.get<Product>(`/api/products/${id}`);

  dispatch({
    type: CartActionTypes.CART_ADD_ITEM,
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
    type: CartActionTypes.CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().Cart.cartItems));
};
