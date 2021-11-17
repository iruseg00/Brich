import { message } from "antd";
import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED,
    REGISTRATION_GET_ID_REQUEST,
    REGISTRATION_GET_ID_SUCCESS,
    REGISTRATION_GET_ID_FAILED
} from "../actionsTypes/registration";

const initialState = {
    loadingRegister: false,
    message: "",
    loadingId: false,
    id: null
};
  
export default function registrationReducer(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
      case REGISTRATION_REQUEST:
        newState.message = "";
        newState.loadingRegister = true;
        return newState;
      case REGISTRATION_SUCCESS:
        newState.message = action.payload;
        newState.loadingRegister = false;
        return newState;
      case REGISTRATION_FAILED:
        message.error(action.payload);
        newState.message = action.payload;
        newState.loadingRegister = false;
        return newState;
      case REGISTRATION_GET_ID_REQUEST:
        newState.loadingId = true;
        return newState;
      case REGISTRATION_GET_ID_SUCCESS:
        newState.loadingId = false;
        newState.id = action.payload;
        return newState;
      case REGISTRATION_GET_ID_FAILED:
        message.error(action.payload);
        newState.loadingId = false;
        return newState;
      default:
        return state;
    }
  }