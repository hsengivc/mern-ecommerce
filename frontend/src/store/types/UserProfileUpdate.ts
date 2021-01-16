import { Action } from "redux";
import { TokenUser } from ".";
import { UserUpdateActions } from "../enums";

export interface UserProfileUpdateRequestAction extends Action {
  type: UserUpdateActions.USER_UPDATE_REQUEST;
}

export interface UserProfileUpdateSuccessAction extends Action {
  type: UserUpdateActions.USER_UPDATE_SUCCESS;
  payload: TokenUser;
}

export interface UserProfileUpdateFailAction extends Action {
  type: UserUpdateActions.USER_UPDATE_FAIL;
  payload: any;
}

export interface UserProfileUpdateResetAction extends Action {
  type: UserUpdateActions.USER_UPDATE_RESET;
}

export type UserProfileUpdateActionTypes =
  | UserProfileUpdateRequestAction
  | UserProfileUpdateSuccessAction
  | UserProfileUpdateFailAction
  | UserProfileUpdateResetAction;
