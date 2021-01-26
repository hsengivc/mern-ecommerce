import { UserUpdateByAdminActions } from "../enums";

export interface UserUpdateRequestAction {
  type: UserUpdateByAdminActions.USER_UPDATE_REQUEST;
}

export interface UserUpdateSuccessAction {
  type: UserUpdateByAdminActions.USER_UPDATE_SUCCESS;
}

export interface UserUpdateFailAction {
  type: UserUpdateByAdminActions.USER_UPDATE_FAIL;
  payload: any;
}

export interface UserUpdateResetAction {
  type: UserUpdateByAdminActions.USER_UPDATE_RESET;
}

export type UserUpdateByAdminTypes =
  | UserUpdateRequestAction
  | UserUpdateSuccessAction
  | UserUpdateFailAction
  | UserUpdateResetAction;
