import { Action } from "redux";
import { TokenUser } from ".";
import { UserDetailsActions } from "../enums";

export interface UserDetailsRequestAction extends Action {
  type: UserDetailsActions.USER_DETAILS_REQUEST;
}

export interface UserDetailsSuccessAction extends Action {
  type: UserDetailsActions.USER_DETAILS_SUCCESS;
  payload: TokenUser;
}

export interface UserDetailsFailAction extends Action {
  type: UserDetailsActions.USER_DETAILS_FAIL;
  payload: any;
}

export interface UserDetailsResetAction {
  type: UserDetailsActions.USER_DETAILS_RESET;
}

export type UserDetailsActionTypes =
  | UserDetailsRequestAction
  | UserDetailsSuccessAction
  | UserDetailsFailAction
  | UserDetailsResetAction;
