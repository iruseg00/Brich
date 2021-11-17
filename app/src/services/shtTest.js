import api from '../helper/api';

export const getShtQuestions = async () => await api('anxiety/all_questions');

export const postShtAnswers = async (data) =>
	await api('anxiety/create_answer', 'POST', data);

export const allAnswersRequest = async () => await api('anxiety/all_answers');

export const postShtTestingSystemResults = async (data) =>
	await api('anxiety/testing_system', 'POST', data);
