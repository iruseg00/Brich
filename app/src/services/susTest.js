import api from '../helper/api';

export const getSusQuestions = async () => await api('sus/all_questions');

export const postSusAnswers = async (data) =>
	await api('sus/create_answer', 'POST', data);

export const allAnswersRequest = async () => await api('sus/all_answers');

export const postSusTestingSystemResults = async (data) =>
	await api('sus/testing_system', 'POST', data);
