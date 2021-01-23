import axios from "axios";
import {
  UserActions,
  RegisterActions,
  UserDetailsActions,
  UserUpdateActions,
} from "../enums";
import { ActionType, TokenUser, User, UserPassword } from "../types";
import { authConfig, config, errorHandler } from "../utils";

export const login = (email: string, password: string): ActionType => async (
  dispatch
) => {
  try {
    dispatch({
      type: UserActions.USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    dispatch({
      type: UserActions.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserActions.USER_LOGIN_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const logout = (): ActionType => async (dispatch) => {
  dispatch({ type: UserActions.USER_LOGIN_LOGOUT });
  localStorage.removeItem("userInfo");
};

export const register = (
  name: string,
  email: string,
  password: string
): ActionType => async (dispatch) => {
  try {
    dispatch({ type: RegisterActions.USER_REGISTER_REQUEST });

    const { data } = await axios.post<TokenUser>(
      "/api/users",
      { name, email, password },
      config
    );
    dispatch({
      type: RegisterActions.USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
      type: UserActions.USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: RegisterActions.USER_REGISTER_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const getUserDetails = (id: string): ActionType => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: UserDetailsActions.USER_DETAILS_REQUEST });
    const { userInfo } = getState().UserLogin;
    if (!userInfo?.token) throw new Error("Token is not valid");
    const { data } = await axios.get<User>(
      `/api/users/${id}`,
      authConfig(userInfo.token)
    );
    dispatch({
      type: UserDetailsActions.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UserDetailsActions.USER_DETAILS_FAIL,
      payload: errorHandler(error),
    });
  }
};

export const updateUserProfile = (user: UserPassword): ActionType => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: UserUpdateActions.USER_UPDATE_REQUEST,
    });
    const { userInfo } = getState().UserLogin;
    if (!userInfo?.token) throw new Error("Token is not valid");
    const { data } = await axios.put<TokenUser>(
      `/api/users/profile`,
      user,
      authConfig(userInfo.token)
    );
    dispatch({
      type: UserUpdateActions.USER_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: UserActions.USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserUpdateActions.USER_UPDATE_FAIL,
      payload: errorHandler(error),
    });
  }
};
