import axios from "axios";
import { ActionType, Product, UpdateProductInput } from "../types";
import {
  ProductListActions,
  ProductDetailsActions,
  ProductDeleteActions,
  ProductCreateActions,
  ProductUpdateActions,
  ProductCreateReviewActions,
  TopProductActions,
} from "../enums";
import { authConfig, errorHandler } from "../utils";

export const listProducts = (
  keyword: string = "",
  pageNumber: string = ""
): ActionType => async (dispatch) => {
  try {
    dispatch({ type: ProductListActions.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get<{
      products: Product[];
      page: number;
      pages: number;
    }>(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);

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

export const createProduct = (): ActionType => async (dispatch, getState) => {
  try {
    dispatch({ type: ProductCreateActions.PRODUCT_CREATE_REQUEST });
    const { userInfo } = getState().UserLogin;
    if (!userInfo?.token) throw new Error("Token is not valid");
    const { data } = await axios.post<Product>(
      `/api/products/`,
      {},
      authConfig(userInfo.token)
    );
    dispatch({
      type: ProductCreateActions.PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductCreateActions.PRODUCT_CREATE_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const updateProduct = (
  product: UpdateProductInput
): ActionType => async (dispatch, getState) => {
  try {
    dispatch({ type: ProductUpdateActions.PRODUCT_UPDATE_REQUEST });
    const { userInfo } = getState().UserLogin;
    if (!userInfo?.token) throw new Error("Token is not valid");
    const { data } = await axios.put<Product>(
      `/api/products/${product._id}`,
      product,
      authConfig(userInfo.token)
    );
    dispatch({
      type: ProductUpdateActions.PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductUpdateActions.PRODUCT_UPDATE_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const createProductReview = (
  prductId: string,
  review: { rating: number; comment: string }
): ActionType => async (dispatch, getState) => {
  try {
    dispatch({
      type: ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_REQUEST,
    });
    const { userInfo } = getState().UserLogin;
    if (!userInfo?.token) throw new Error("Token is not valid");
    await axios.post(
      `/api/products/${prductId}/reviews`,
      review,
      authConfig(userInfo.token)
    );
    dispatch({
      type: ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const listTopProducts = (): ActionType => async (dispatch) => {
  try {
    dispatch({ type: TopProductActions.PRODUCT_TOP_REQUEST });
    const { data } = await axios.get<Product[]>(`/api/products/top`);
    dispatch({
      type: TopProductActions.PRODUCT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TopProductActions.PRODUCT_TOP_FAIL,
      payload: errorHandler(error),
    });
  }
};
