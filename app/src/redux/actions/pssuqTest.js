import {
  getPssuqQuestions,
  postPssuqAnswers,
  allAnswersRequest,
  postPssuqTestingSystemResults,
} from "../../services/pssuqTest";
import {
  PSSUQ_TEST_REQUEST,
  PSSUQ_TEST_SUCCESS,
  PSSUQ_TEST_FAILED,
  PSSUQ_TEST_GET_RESULTS,
  PSSUQ_TEST_GET_ALL_ANSWERS,
  PSSUQ_TEST_GET_TESTINGSYSTEM_TESTS,
} from "../actionsTypes/pssuqTest";
import { message } from "antd";

export function getPssuqTest() {
  return async function (dispatch) {
    dispatch({ type: PSSUQ_TEST_REQUEST });
    try {
      const response = await getPssuqQuestions();
      if (!response?.data) throw new Error("Failed request");
      dispatch({ type: PSSUQ_TEST_SUCCESS, payload: response?.data });
    } catch (err) {
      dispatch({ type: PSSUQ_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}
export function getResults(data) {
  return async function (dispatch) {
    dispatch({ type: PSSUQ_TEST_REQUEST });
    try {
      const response = await postPssuqAnswers(data);
      if (!response?.data) throw new Error("Failed request");
      dispatch({ type: PSSUQ_TEST_GET_RESULTS, payload: response?.data });
    } catch (err) {
      dispatch({ type: PSSUQ_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}

export function getAllPssuqAnswers() {
  return async function (dispatch) {
    dispatch({ type: PSSUQ_TEST_REQUEST });
    try {
      const response = await allAnswersRequest();
      if (!response?.data) throw new Error("Failed request");
      dispatch({ type: PSSUQ_TEST_GET_ALL_ANSWERS, payload: response?.data });
    } catch (err) {
      dispatch({ type: PSSUQ_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}

export function getTestingSystemResults(data) {
  return async function (dispatch) {
    dispatch({ type: PSSUQ_TEST_REQUEST });
    try {
      const response = await postPssuqTestingSystemResults(data);
      if (!response?.data) throw new Error("Failed request");
      dispatch({
        type: PSSUQ_TEST_GET_TESTINGSYSTEM_TESTS,
        payload: response?.data,
      });
    } catch (err) {
      dispatch({ type: PSSUQ_TEST_FAILED, payload: err });
      message.error(err);
    }
  };
}
