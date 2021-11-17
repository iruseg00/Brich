import { whoAmI } from "./users";
import AuthService from "../../services/AuthService";
import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED,
    REGISTRATION_GET_ID_REQUEST,
    REGISTRATION_GET_ID_SUCCESS,
    REGISTRATION_GET_ID_FAILED
} from "../actionsTypes/registration";
import { AUTH_LOGIN_SUCCESS } from "../actionsTypes/auth";

export function register(data) {
    return async function(dispatch) {
      dispatch({ type: REGISTRATION_REQUEST });
      AuthService.register(data)
        .then(data => {
          dispatch({ type: REGISTRATION_SUCCESS, payload: data.data?.message });
          dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data.data.accessToken });
          localStorage.setItem("accessToken", data.data.accessToken);
          localStorage.setItem("refreshToken", data.data.refreshToken);
          localStorage.setItem("expires_in", data.data.expires_in);
          dispatch(whoAmI());
        })
        .catch(err => {
          let message;
          if (err.response?.data === "Login is already taken")
            message = "Логин уже занят! Попробуйте другой...";
          else message = "Что-то пошло не так";
          dispatch({ type: REGISTRATION_FAILED, payload: message });
          return Promise.reject(message);
        });
    };
}

export function getId(data) {///
    return async function(dispatch) {
      dispatch({ type: REGISTRATION_GET_ID_REQUEST });
      AuthService.login(data)
        .then(data => {
          dispatch({ type: REGISTRATION_GET_ID_SUCCESS, payload: data.data.accessToken });
          localStorage.setItem("accessToken", data.data.accessToken);
          localStorage.setItem("refreshToken", data.data.refreshToken);
          localStorage.setItem("expires_in", data.data.expires_in);
          // history.push("/");
          // dispatch(whoAmI());
        })
        .catch(err => {
          let message;
          if (err.response?.data === "Password is incorrect")
            message = "Неверный пароль";
          else message = "Что-то пошло не так";
          dispatch({ type: REGISTRATION_GET_ID_FAILED, payload: message });
          return Promise.reject(message);
        });
    };
  }