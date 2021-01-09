import axios from "axios";
import { Dispatch } from "redux";
import { ProductList } from "../constants";
import { ProductListActionTypes } from "../types";

export const listProducts = () => async (
  dispatch: Dispatch<ProductListActionTypes>
) => {
  try {
    dispatch({ type: ProductList.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: ProductList.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductList.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
