import {
	getAcQuestions,
	postAcAnswers,
	allAnswersRequest,
	postAcTestingSystemResults,
} from '../../services/acTest';
import {
	AC_TEST_REQUEST,
	AC_TEST_SUCCESS,
	AC_TEST_FAILED,
	AC_TEST_GET_RESULTS,
	AC_TEST_GET_ALL_ANSWERS,
	AC_TEST_GET_TESTINGSYSTEM_TESTS,
} from '../actionsTypes/acTest';
import { message } from 'antd';

export function getAcTest() {
	return async function (dispatch) {
		dispatch({ type: AC_TEST_REQUEST });
		try {
			const response = await getAcQuestions();
			if (!response?.data) throw new Error('Failed request');
			dispatch({ type: AC_TEST_SUCCESS, payload: response?.data });
		} catch (err) {
			dispatch({ type: AC_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
export function getResults(data) {
	return async function (dispatch) {
		dispatch({ type: AC_TEST_REQUEST });
		try {
			const response = await postAcAnswers(data);
			if (!response?.data) throw new Error('Failed request');
			dispatch({ type: AC_TEST_GET_RESULTS, payload: response?.data });
		} catch (err) {
			dispatch({ type: AC_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}

export function getAllAcAnswers() {
	return async function (dispatch) {
		dispatch({ type: AC_TEST_REQUEST });
		try {
			const response = await allAnswersRequest();
			if (!response?.data) throw new Error('Failed request');
			dispatch({ type: AC_TEST_GET_ALL_ANSWERS, payload: response?.data });
		} catch (err) {
			dispatch({ type: AC_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}

export function getTestingSystemResults(data) {
	return async function (dispatch) {
		dispatch({ type: AC_TEST_REQUEST });
		try {
			const response = await postAcTestingSystemResults(data);
			if (!response?.data) throw new Error('Failed request');
			dispatch({
				type: AC_TEST_GET_TESTINGSYSTEM_TESTS,
				payload: response?.data,
			});
		} catch (err) {
			dispatch({ type: AC_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
