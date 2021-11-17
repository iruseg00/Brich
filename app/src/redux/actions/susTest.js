import {
  getSusQuestions,
  postSusAnswers,
  allAnswersRequest,
  postSusTestingSystemResults,
} from "../../services/susTest";
import {
  SUS_TEST_REQUEST,
  SUS_TEST_SUCCESS,
  SUS_TEST_FAILED,
  SUS_TEST_GET_RESULTS,
  SUS_TEST_GET_ALL_ANSWERS,
  SUS_TEST_GET_TESTINGSYSTEM_TESTS,
} from "../actionsTypes/susTest";
import { message } from "antd";

export function getSusTest() {
  return async function (dispatch) {
    dispatch({ type: SUS_TEST_REQUEST });
    try {
      const response = await getSusQuestions();
      if (!response?.data) throw new Error("Failed request");
      dispatch({ type: SUS_TEST_SUCCESS, payload: response?.data });
    } catch (err) {
      dispatch({ type: SUS_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}
export function getResults(data) {
  return async function (dispatch) {
    dispatch({ type: SUS_TEST_REQUEST });
    try {
      const response = await postSusAnswers(data);
      if (!response?.data) throw new Error("Failed request");
      dispatch({ type: SUS_TEST_GET_RESULTS, payload: response?.data });
    } catch (err) {
      dispatch({ type: SUS_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}

export function getAllSusAnswers() {
  return async function (dispatch) {
    dispatch({ type: SUS_TEST_REQUEST });
    try {
      const response = await allAnswersRequest();
      if (!response?.data) throw new Error("Failed request");
      dispatch({ type: SUS_TEST_GET_ALL_ANSWERS, payload: response?.data });
    } catch (err) {
      dispatch({ type: SUS_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}

export function getTestingSystemResults(data) {
  return async function (dispatch) {
    dispatch({ type: SUS_TEST_REQUEST });
    try {
      const response = await postSusTestingSystemResults(data);
      if (!response?.data) throw new Error("Failed request");
      dispatch({
        type: SUS_TEST_GET_TESTINGSYSTEM_TESTS,
        payload: response?.data,
      });
    } catch (err) {
      dispatch({ type: SUS_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}
