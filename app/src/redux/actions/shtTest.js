import {
	getShtQuestions,
	postShtAnswers,
	allAnswersRequest,
	postShtTestingSystemResults,
} from '../../services/shtTest';
import {
	SHT_TEST_REQUEST,
	SHT_TEST_SUCCESS,
	SHT_TEST_FAILED,
	SHT_TEST_GET_RESULTS,
	SHT_TEST_GET_ALL_ANSWERS,
	SHT_TEST_GET_TESTINGSYSTEM_TESTS,
} from '../actionsTypes/shtTest';
import { message } from 'antd';

export function getShtTest() {
	return async function (dispatch) {
		dispatch({ type: SHT_TEST_REQUEST });
		try {
			const response = await getShtQuestions();
			if (!response?.data) throw new Error('Failed request');
			dispatch({ type: SHT_TEST_SUCCESS, payload: response?.data });
		} catch (err) {
			dispatch({ type: SHT_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
export function getResults(data) {
	return async function (dispatch) {
		dispatch({ type: SHT_TEST_REQUEST });
		try {
			const response = await postShtAnswers(data);
			if (!response?.data) throw new Error('Failed request');
			dispatch({ type: SHT_TEST_GET_RESULTS, payload: response?.data });
		} catch (err) {
			dispatch({ type: SHT_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}

export function getAllShtAnswers() {
	return async function (dispatch) {
		dispatch({ type: SHT_TEST_REQUEST });
		try {
			const response = await allAnswersRequest();
			if (!response?.data) throw new Error('Failed request');
			dispatch({ type: SHT_TEST_GET_ALL_ANSWERS, payload: response?.data });
		} catch (err) {
			dispatch({ type: SHT_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}

export function getTestingSystemResults(data) {
	return async function (dispatch) {
		dispatch({ type: SHT_TEST_REQUEST });
		try {
			const response = await postShtTestingSystemResults(data);
			if (!response?.data) throw new Error('Failed request');
			dispatch({
				type: SHT_TEST_GET_TESTINGSYSTEM_TESTS,
				payload: response?.data,
			});
		} catch (err) {
			dispatch({ type: SHT_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
