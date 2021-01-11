import {
  ProductListAction,
  ProductDetailsAction,
  ProductListState,
  ProductDetailsState,
} from "../types";
import { ProductListActionTypes, ProductDetailsActionTypes } from "../enums";

const initialListState: ProductListState = {
  products: [],
  loading: false,
};

const initialDetailsState: ProductDetailsState = {
  loading: false,
};

/* Product List **/
export const productListReducer = (
  state: ProductListState = initialListState,
  action: ProductListAction
) => {
  switch (action.type) {
    case ProductListActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: initialListState.products };
    case ProductListActionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: initialListState.loading, products: action.payload };
    case ProductListActionTypes.PRODUCT_LIST_FAIL:
      return {
        loading: initialListState.loading,
        products: initialListState.products,
        error: action.payload,
      };
    default:
      return state;
  }
};

/* Product Details **/
export const productDetailsReducer = (
  state: ProductDetailsState = initialDetailsState,
  action: ProductDetailsAction
) => {
  switch (action.type) {
    case ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true, product: initialDetailsState.product };
    case ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: initialDetailsState.loading,
        product: action.payload,
      };
    case ProductDetailsActionTypes.PRODUCT_DETAILS_FAIL:
      return {
        loading: initialDetailsState.loading,
        product: initialDetailsState.product,
        error: action.payload,
      };
    default:
      return state;
  }
};
