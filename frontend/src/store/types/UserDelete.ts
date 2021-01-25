import { UserDeleteActions } from "../enums";

export interface UserDeleteRequestAction {
  type: UserDeleteActions.USER_DELETE_REQUEST;
}

export interface UserDeleteSuccessAction {
  type: UserDeleteActions.USER_DELETE_SUCCESS;
}

export interface UserDeleteFailAction {
  type: UserDeleteActions.USER_DELETE_FAIL;
  payload: any;
}

export type UserDeleteActionTypes =
  | UserDeleteRequestAction
  | UserDeleteSuccessAction
  | UserDeleteFailAction;
