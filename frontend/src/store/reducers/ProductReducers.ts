import {
  ProductListAction,
  ProductDetailsAction,
  ProductListState,
  ProductDetailsState,
  ProductDeleteState,
  ProductDeleteActionTypes,
} from "../types";
import {
  ProductListActions,
  ProductDetailsActions,
  ProductDeleteActions,
} from "../enums";

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
    case ProductListActions.PRODUCT_LIST_REQUEST:
      return { loading: true, products: initialListState.products };
    case ProductListActions.PRODUCT_LIST_SUCCESS:
      return { loading: initialListState.loading, products: action.payload };
    case ProductListActions.PRODUCT_LIST_FAIL:
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
    case ProductDetailsActions.PRODUCT_DETAILS_REQUEST:
      return { loading: true, product: initialDetailsState.product };
    case ProductDetailsActions.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: initialDetailsState.loading,
        product: action.payload,
      };
    case ProductDetailsActions.PRODUCT_DETAILS_FAIL:
      return {
        loading: initialDetailsState.loading,
        product: initialDetailsState.product,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialProductDeleteState: ProductDeleteState = {
  loading: false,
};

export const productDeleteReducer = (
  state: ProductDeleteState = initialProductDeleteState,
  action: ProductDeleteActionTypes
) => {
  switch (action.type) {
    case ProductDeleteActions.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case ProductDeleteActions.PRODUCT_DELETE_SUCCESS:
      return {
        loading: initialProductDeleteState.loading,
        success: true,
      };
    case ProductDeleteActions.PRODUCT_DELETE_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
