import { User } from ".";
import { UserListActions } from "../enums";

export interface UserListRequestAction {
  type: UserListActions.USER_LIST_REQUEST;
}

export interface UserListSuccessAction {
  type: UserListActions.USER_LIST_SUCCESS;
  payload: User[];
}

export interface UserListFailAction {
  type: UserListActions.USER_LIST_FAIL;
  payload: any;
}

export interface UserListResetAction {
  type: UserListActions.USER_LIST_RESET;
}

export type UserListActionTypes =
  | UserListRequestAction
  | UserListSuccessAction
  | UserListFailAction
  | UserListResetAction;
