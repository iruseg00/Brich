import {
	PSSUQ_TEST_REQUEST,
	PSSUQ_TEST_SUCCESS,
	PSSUQ_TEST_FAILED,
	PSSUQ_TEST_GET_RESULTS,
	PSSUQ_TEST_GET_ALL_ANSWERS,
	PSSUQ_TEST_GET_TESTINGSYSTEM_TESTS,
} from '../actionsTypes/pssuqTest';

const initialState = {
	loading: false,
	questions: [],
	results: {},
	allAnswers: [],
	testingSystemTests: [],
	message: '',
};

export default function usersReducer(state = initialState, action) {
	const newState = { ...state };
	switch (action.type) {
		case PSSUQ_TEST_REQUEST:
			newState.loading = true;
			return newState;
		case PSSUQ_TEST_SUCCESS:
			newState.loading = false;
			newState.questions = action.payload;
			return newState;
		case PSSUQ_TEST_FAILED:
			newState.loading = false;
			newState.message = action.payload;
			return newState;
		case PSSUQ_TEST_GET_RESULTS:
			newState.loading = false;
			newState.results = action.payload;
			return newState;
		case PSSUQ_TEST_GET_ALL_ANSWERS:
			newState.loading = false;
			newState.allAnswers = action.payload;
			return newState;
		case PSSUQ_TEST_GET_TESTINGSYSTEM_TESTS:
			newState.loading = false;
			newState.testingSystemTests = action.payload;
			return newState;
		default:
			return state;
	}
}
