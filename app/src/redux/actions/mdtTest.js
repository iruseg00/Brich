import {
  getMdtQuestions,
  postMdtAnswers,
  allAnswersRequest,
  postMdtTestingSystemResults,
} from "../../services/mdtTest";
import {
  MDT_TEST_REQUEST,
  MDT_TEST_SUCCESS,
  MDT_TEST_FAILED,
  MDT_TEST_GET_RESULTS,
  MDT_TEST_GET_ALL_ANSWERS,
  MDT_TEST_GET_TESTINGSYSTEM_TESTS,
} from "../actionsTypes/mdtTest";
import { message } from "antd";

export function getMdtTest() {
  return async function (dispatch) {
    dispatch({ type: MDT_TEST_REQUEST });
    try {
      const response = await getMdtQuestions();
      if (!response?.data) throw new Error("Failed request.");
      dispatch({ type: MDT_TEST_SUCCESS, payload: response?.data });
    } catch (err) {
      dispatch({ type: MDT_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}
export function getResults(data) {
  return async function (dispatch) {
    dispatch({ type: MDT_TEST_REQUEST });
    try {
      const response = await postMdtAnswers(data);
      if (!response?.data) throw new Error("Failed request.");
      dispatch({ type: MDT_TEST_GET_RESULTS, payload: response?.data });
    } catch (err) {
      dispatch({ type: MDT_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}

export function getAllMdtAnswers() {
  return async function (dispatch) {
    dispatch({ type: MDT_TEST_REQUEST });
    try {
      const response = await allAnswersRequest();
      if (!response?.data) throw new Error("Failed request.");
      dispatch({ type: MDT_TEST_GET_ALL_ANSWERS, payload: response?.data });
    } catch (err) {
      dispatch({ type: MDT_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}

export function getTestingSystemResults(data) {
  return async function (dispatch) {
    dispatch({ type: MDT_TEST_REQUEST });
    try {
      const response = await postMdtTestingSystemResults(data);
      if (!response?.data) throw new Error("Failed request");
      dispatch({
        type: MDT_TEST_GET_TESTINGSYSTEM_TESTS,
        payload: response?.data,
      });
    } catch (err) {
      dispatch({ type: MDT_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}
