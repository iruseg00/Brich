import api from '../helper/api';

export const getDsQuestions = async () => await api('dc/all_questions');

export const postDsAnswers = async (data) => await api('dc/create_answer', 'POST', data);

export const allAnswersRequest = async () => await api('dc/all_answers');

export const postDsTestingSystemResults = async (data) =>
	await api('dc/testing_system', 'POST', data);
