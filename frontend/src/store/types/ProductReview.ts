import { ProductCreateReviewActions } from "../enums";

export interface ProductCreateReviewRequestAction {
  type: ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_REQUEST;
}

export interface ProductCreateReviewSuccessAction {
  type: ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_SUCCESS;
}

export interface ProductCreateReviewFailAction {
  type: ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_FAIL;
  payload: any;
}

export interface ProductCreateReviewResetAction {
  type: ProductCreateReviewActions.PRODUCT_CREATE_REVIEW_RESET;
}

export type ProductCreateReviewActionTypes =
  | ProductCreateReviewRequestAction
  | ProductCreateReviewSuccessAction
  | ProductCreateReviewFailAction
  | ProductCreateReviewResetAction;
