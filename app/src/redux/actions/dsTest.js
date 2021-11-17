import {
	getDsQuestions,
	postDsAnswers,
	allAnswersRequest,
	postDsTestingSystemResults,
} from '../../services/dsTest';
import {
	DS_TEST_REQUEST,
	DS_TEST_SUCCESS,
	DS_TEST_FAILED,
	DS_TEST_GET_RESULTS,
	DS_TEST_GET_ALL_ANSWERS,
	DS_TEST_GET_TESTINGSYSTEM_TESTS,
} from '../actionsTypes/dsTest';
import { message } from 'antd';

export function getDsTest() {
	return async function (dispatch) {
		dispatch({ type: DS_TEST_REQUEST });
		try {
			const response = await getDsQuestions();
			if (!response?.data) throw new Error('Failed request');
			dispatch({ type: DS_TEST_SUCCESS, payload: response?.data });
		} catch (err) {
			dispatch({ type: DS_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
export function getResults(data) {
	return async function (dispatch) {
		dispatch({ type: DS_TEST_REQUEST });
		try {
			const response = await postDsAnswers(data);
			if (!response?.data) throw new Error('Failed request');
			dispatch({ type: DS_TEST_GET_RESULTS, payload: response?.data });
		} catch (err) {
			dispatch({ type: DS_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}

export function getAllDsAnswers() {
	return async function (dispatch) {
		dispatch({ type: DS_TEST_REQUEST });
		try {
			const response = await allAnswersRequest();
			if (!response?.data) throw new Error('Failed request');
			dispatch({ type: DS_TEST_GET_ALL_ANSWERS, payload: response?.data });
		} catch (err) {
			dispatch({ type: DS_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}

export function getTestingSystemResults(data) {
	return async function (dispatch) {
		dispatch({ type: DS_TEST_REQUEST });
		try {
			const response = await postDsTestingSystemResults(data);
			if (!response?.data) throw new Error('Failed request');
			dispatch({
				type: DS_TEST_GET_TESTINGSYSTEM_TESTS,
				payload: response?.data,
			});
		} catch (err) {
			dispatch({ type: DS_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
