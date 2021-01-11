import axios from "axios";
import { ActionType } from "../types";
import { ProductListActionTypes } from "../enums";

const errorMessage = (error: any) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const listProducts = (): ActionType => async (dispatch) => {
  try {
    dispatch({ type: ProductListActionTypes.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

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
