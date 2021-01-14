import { Action } from "redux";
import { TokenUser } from ".";
import { UserActionTypes } from "../enums";

export interface UserLoginRequestAction extends Action {
  type: UserActionTypes.USER_LOGIN_REQUEST;
}

export interface UserLoginSuccessAction extends Action {
  type: UserActionTypes.USER_LOGIN_SUCCESS;
  payload: TokenUser;
}

export interface UserLoginFailAction extends Action {
  type: UserActionTypes.USER_LOGIN_FAIL;
  payload: any;
}

export interface UserLoginLogoutAction extends Action {
  type: UserActionTypes.USER_LOGIN_LOGOUT;
  payload: {};
}

export type UserLoginActionTypes =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserLoginLogoutAction;
