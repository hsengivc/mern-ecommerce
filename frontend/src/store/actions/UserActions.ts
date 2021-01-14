import axios from "axios";
import { UserActionTypes } from "../enums";
import { ActionType } from "../types";
import { errorHandler } from "../utils";

export const login = (email: string, password: string): ActionType => async (
  dispatch
) => {
  try {
    dispatch({
      type: UserActionTypes.USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    dispatch({
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_LOGIN_FAIL,
      payload: errorHandler(error),
    });
  }
};
