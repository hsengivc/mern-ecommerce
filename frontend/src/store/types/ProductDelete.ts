import { ProductDeleteActions } from "../enums";

export interface ProductDeleteRequestAction {
  type: ProductDeleteActions.PRODUCT_DELETE_REQUEST;
}

export interface ProductDeleteSuccessAction {
  type: ProductDeleteActions.PRODUCT_DELETE_SUCCESS;
}

export interface ProductDeleteFailAction {
  type: ProductDeleteActions.PRODUCT_DELETE_FAIL;
  payload: any;
}

export type ProductDeleteActionTypes =
  | ProductDeleteRequestAction
  | ProductDeleteSuccessAction
  | ProductDeleteFailAction;
