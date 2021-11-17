import api from '../helper/api';

export const getAcQuestions = async () => await api('ac/all_questions');

export const postAcAnswers = async (data) => await api('ac/create_answer', 'POST', data);

export const allAnswersRequest = async () => await api('ac/all_answers');

export const postAcTestingSystemResults = async (data) =>
	await api('ac/testing_system', 'POST', data);
