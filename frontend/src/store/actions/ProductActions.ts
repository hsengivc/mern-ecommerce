import axios from "axios";
import { ActionType, Product } from "../types";
import {
  ProductListActions,
  ProductDetailsActions,
  ProductDeleteActions,
} from "../enums";
import { authConfig, errorHandler } from "../utils";

export const listProducts = (): ActionType => async (dispatch) => {
  try {
    dispatch({ type: ProductListActions.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get<Product[]>("/api/products");

    dispatch({
      type: ProductListActions.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductListActions.PRODUCT_LIST_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const listProductDetails = (id: string): ActionType => async (
  dispatch
) => {
  try {
    dispatch({ type: ProductDetailsActions.PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get<Product>(`/api/products/${id}`);
    dispatch({
      type: ProductDetailsActions.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductDetailsActions.PRODUCT_DETAILS_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const deleteProduct = (id: string): ActionType => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: ProductDeleteActions.PRODUCT_DELETE_REQUEST });
    const { userInfo } = getState().UserLogin;
    if (!userInfo?.token) throw new Error("Token is not valid");
    await axios.delete(`/api/products/${id}`, authConfig(userInfo.token));
    dispatch({
      type: ProductDeleteActions.PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ProductDeleteActions.PRODUCT_DELETE_FAIL,
      payload: errorHandler(error),
    });
  }
};
