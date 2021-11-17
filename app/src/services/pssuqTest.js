import api from '../helper/api';

export const getPssuqQuestions = async () => await api('pssuq/all_questions');

export const postPssuqAnswers = async (data) =>
	await api('pssuq/create_answer', 'POST', data);

export const allAnswersRequest = async () => await api('pssuq/all_answers');

export const postPssuqTestingSystemResults = async (data) =>
	await api('pssuq/testing_system', 'POST', data);
