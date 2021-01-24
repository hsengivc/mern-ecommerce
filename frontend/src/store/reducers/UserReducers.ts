import {
  UserActions,
  RegisterActions,
  UserDetailsActions,
  UserUpdateActions,
} from "../enums";
import {
  UserDetailsActionTypes,
  UserLoginActionTypes,
  UserLoginState,
  UserRegisterActionTypes,
  UserRegisterState,
  UserUpdateProfileState,
  UserProfileUpdateActionTypes,
} from "../types";

const initialUserLoginState: UserLoginState = {
  loading: false,
};

export const userLoginReducer = (
  state: UserLoginState = initialUserLoginState,
  action: UserLoginActionTypes
) => {
  switch (action.type) {
    case UserActions.USER_LOGIN_REQUEST:
      return { loading: true };
    case UserActions.USER_LOGIN_SUCCESS:
      return {
        loading: initialUserLoginState.loading,
        userInfo: action.payload,
      };
    case UserActions.USER_LOGIN_FAIL:
      return {
        loading: initialUserLoginState.loading,
        error: action.payload,
      };
    case UserActions.USER_LOGIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

const initialUserRegisterState: UserLoginState = {
  loading: false,
};

export const userRegisterReducer = (
  state: UserRegisterState = initialUserRegisterState,
  action: UserRegisterActionTypes
) => {
  switch (action.type) {
    case RegisterActions.USER_REGISTER_REQUEST:
      return { loading: true };
    case RegisterActions.USER_REGISTER_SUCCESS:
      return {
        loading: initialUserRegisterState.loading,
        userInfo: action.payload,
      };
    case RegisterActions.USER_REGISTER_FAIL:
      return {
        loading: initialUserRegisterState.loading,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialUserDetailsState: UserLoginState = {
  loading: false,
};

export const userDetailsReducer = (
  state: UserRegisterState = initialUserDetailsState,
  action: UserDetailsActionTypes
) => {
  switch (action.type) {
    case UserDetailsActions.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case UserDetailsActions.USER_DETAILS_SUCCESS:
      return {
        loading: initialUserDetailsState.loading,
        user: action.payload,
      };
    case UserDetailsActions.USER_DETAILS_FAIL:
      return {
        loading: initialUserDetailsState.loading,
        error: action.payload,
      };
    case UserDetailsActions.USER_DETAILS_RESET:
      return { loading: false, orders: [] };
    default:
      return state;
  }
};

const userProfileUpdateInitialState: UserUpdateProfileState = {
  loading: false,
};

export const userProfileUpdateReducer = (
  state: UserUpdateProfileState = userProfileUpdateInitialState,
  action: UserProfileUpdateActionTypes
) => {
  switch (action.type) {
    case UserUpdateActions.USER_UPDATE_REQUEST:
      return { loading: true };
    case UserUpdateActions.USER_UPDATE_SUCCESS:
      return {
        loading: userProfileUpdateInitialState.loading,
        user: action.payload,
        success: true,
      };
    case UserUpdateActions.USER_UPDATE_FAIL:
      return {
        loading: userProfileUpdateInitialState.loading,
        error: action.payload,
      };
    case UserUpdateActions.USER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
