import { UserActionTypes } from "../enums";
import { UserLoginActionTypes, UserLoginState } from "../types";

const initialUserState: UserLoginState = {
  loading: false,
};

export const userLoginReducer = (
  state: UserLoginState = initialUserState,
  action: UserLoginActionTypes
) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_REQUEST:
      return { loading: true };
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return { loading: initialUserState.loading, userInfo: action.payload };
    case UserActionTypes.USER_LOGIN_FAIL:
      return {
        loading: initialUserState.loading,
        error: action.payload,
      };
    case UserActionTypes.USER_LOGIN_LOGOUT:
      return {};
    default:
      return state;
  }
};
