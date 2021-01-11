import axios from "axios";
import { ActionType, Product } from "../types";
import { ProductListActionTypes, ProductDetailsActionTypes } from "../enums";

const errorMessage = (error: any) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const listProducts = (): ActionType => async (dispatch) => {
  try {
    dispatch({ type: ProductListActionTypes.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get<Product[]>("/api/products");

    dispatch({
      type: ProductListActionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductListActionTypes.PRODUCT_LIST_FAIL,
      payload: errorMessage(error),
    });
  }
};

export const listProductDetails = (id: string): ActionType => async (
  dispatch
) => {
  try {
    dispatch({ type: ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get<Product>(`/api/products/${id}`);
    dispatch({
      type: ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductDetailsActionTypes.PRODUCT_DETAILS_FAIL,
      payload: errorMessage(error),
    });
  }
};
