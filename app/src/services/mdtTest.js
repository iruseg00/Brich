import api from '../helper/api';

export const getMdtQuestions = async () => await api('mdt/all_questions');

export const postMdtAnswers = async (data) =>
	await api('mdt/create_answer', 'POST', data);

export const allAnswersRequest = async () => await api('mdt/all_answers');

export const postMdtTestingSystemResults = async (data) =>
	await api('mdt/testing_system', 'POST', data);
