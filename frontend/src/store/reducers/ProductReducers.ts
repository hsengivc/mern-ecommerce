import {
  ProductListAction,
  ProductDetailsAction,
  ProductListState,
  ProductDetailsState,
  ProductDeleteState,
  ProductDeleteActionTypes,
  ProductCreateState,
  ProductCreateActionTypes,
  ProductUpdateState,
  ProductUpdateActionTypes,
  ProductCreateReviewState,
  ProductCreateReviewActionTypes,
} from "../types";
import {
  ProductListActions,
  ProductDetailsActions,
  ProductDeleteActions,
  ProductCreateActions,
  ProductUpdateActions,
  ProductCreateReviewActions,
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

const initialProductCreateState: ProductCreateState = {
  loading: false,
};

export const productCreateReducer = (
  state: ProductCreateState = initialProductCreateState,
  action: ProductCreateActionTypes
) => {
  switch (action.type) {
    case ProductCreateActions.PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case ProductCreateActions.PRODUCT_CREATE_SUCCESS:
      return {
        loading: initialProductCreateState.loading,
        success: true,
        product: action.payload,
      };
    case ProductCreateActions.PRODUCT_CREATE_FAIL:
      return {
        error: action.payload,
      };
    case ProductCreateActions.PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

const initialProductUpdateState: ProductUpdateState = {
  loading: false,
};

export const productUpdateReducer = (
  state: ProductUpdateState = initialProductUpdateState,
  action: ProductUpdateActionTypes
) => {
  switch (action.type) {
    case ProductUpdateActions.PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case ProductUpdateActions.PRODUCT_UPDATE_SUCCESS:
      return {
        loading: initialProductUpdateState.loading,
        success: true,
        product: action.payload,
      };
    case ProductUpdateActions.PRODUCT_UPDATE_FAIL:
      return {
        error: action.payload,
      };
    case ProductUpdateActions.PRODUCT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

const initialProductCreateReviewState: ProductCreateReviewState = {
  loading: false,
};

export const productCreateReviewReducer = (
  state: ProductCreateReviewState = initialProductCreateReviewState,
  action: ProductCreateReviewActionTypes
) => {
  switch (action.type) {
    case ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        loading: initialProductCreateReviewState.loading,
        success: true,
      };
    case ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_FAIL:
      return {
        error: action.payload,
      };
    case ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
