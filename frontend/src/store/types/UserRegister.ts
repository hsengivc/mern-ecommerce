import { Action } from "redux";
import { TokenUser } from ".";
import { RegisterActions } from "../enums";

export interface UserRegisterRequestAction extends Action {
  type: RegisterActions.USER_REGISTER_REQUEST;
}

export interface UserRegisterSuccessAction extends Action {
  type: RegisterActions.USER_REGISTER_SUCCESS;
  payload: TokenUser;
}

export interface UserRegisterFailAction extends Action {
  type: RegisterActions.USER_REGISTER_FAIL;
  payload: any;
}

export type UserRegisterActionTypes =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction;
