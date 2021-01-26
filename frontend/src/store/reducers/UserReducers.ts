import {
  UserActions,
  RegisterActions,
  UserDetailsActions,
  UserUpdateActions,
  UserListActions,
  UserDeleteActions,
  UserUpdateByAdminActions,
} from "../enums";
import {
  UserDetailsActionTypes,
  UserLoginActionTypes,
  UserLoginState,
  UserRegisterActionTypes,
  UserRegisterState,
  UserUpdateProfileState,
  UserProfileUpdateActionTypes,
  UserListActionTypes,
  UserListState,
  UserDeleteState,
  UserUpdateByAdminState,
  UserUpdateByAdminTypes,
} from "../types";
import { UserDeleteActionTypes } from "../types/UserDelete";

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

const userListInitialState: UserListState = {
  loading: false,
  users: [],
};

export const userListReducer = (
  state: UserListState = userListInitialState,
  action: UserListActionTypes
) => {
  switch (action.type) {
    case UserListActions.USER_LIST_REQUEST:
      return { loading: true, users: [] };
    case UserListActions.USER_LIST_SUCCESS:
      return {
        loading: userListInitialState.loading,
        users: action.payload,
      };
    case UserListActions.USER_LIST_FAIL:
      return {
        loading: userListInitialState.loading,
        error: action.payload,
        users: state.users,
      };
    case UserListActions.USER_LIST_RESET:
      return {
        loading: userListInitialState.loading,
        users: [],
      };
    default:
      return state;
  }
};

const userDetleteInitialState: UserDeleteState = {
  loading: false,
};

export const userDeleteReducer = (
  state: UserDeleteState = userDetleteInitialState,
  action: UserDeleteActionTypes
) => {
  switch (action.type) {
    case UserDeleteActions.USER_DELETE_REQUEST:
      return { loading: true };
    case UserDeleteActions.USER_DELETE_SUCCESS:
      return {
        loading: userDetleteInitialState.loading,
        success: true,
      };
    case UserDeleteActions.USER_DELETE_FAIL:
      return {
        loading: userDetleteInitialState.loading,
        error: action.payload,
      };
    default:
      return state;
  }
};

const userUpdateInitialState: UserUpdateByAdminState = {
  loading: false,
};

export const userUpdateReducer = (
  state: UserUpdateByAdminState = userUpdateInitialState,
  action: UserUpdateByAdminTypes
) => {
  switch (action.type) {
    case UserUpdateByAdminActions.USER_UPDATE_REQUEST:
      return { loading: true };
    case UserUpdateByAdminActions.USER_UPDATE_SUCCESS:
      return {
        loading: userUpdateInitialState.loading,
        success: true,
      };
    case UserUpdateByAdminActions.USER_UPDATE_FAIL:
      return {
        loading: userUpdateInitialState.loading,
        error: action.payload,
      };
    case UserUpdateByAdminActions.USER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
