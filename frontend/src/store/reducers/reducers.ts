import { ProductList } from "../constants";
import { ProductState, ProductListActionTypes } from "../types";

const initialState: ProductState = {
  products: [],
};

export const productListReducer = (
  state = initialState,
  action: ProductListActionTypes
) => {
  switch (action.type) {
    case ProductList.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ProductList.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ProductList.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
