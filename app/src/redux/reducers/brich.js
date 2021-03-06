import {
	REQUEST,
	SUCCESS_REQUEST,
	FAILED_REQUEST,
	ABOUT_REQUEST,
	GET_POSTS,
	DOWNLOAD_JSON,
	UPLOAD_JSON,
	CLEAR_FILE,
} from '../actionsTypes/brich';

const initialState = {
	about: {},
	loading: true,
	info: null,
	posts: {},
	file: {},
};

const brichReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case REQUEST:
			newState.loading = true;
			return newState;
		case SUCCESS_REQUEST:
			newState.info = action.payload;
			newState.loading = false;
			return newState;
		case FAILED_REQUEST:
			newState.loading = false;
			return newState;
		case ABOUT_REQUEST:
			newState.about = action.payload;
			newState.loading = false;
			return newState;
		case GET_POSTS:
			newState.posts = action.payload;
			newState.loading = false;
			return newState;
		case DOWNLOAD_JSON:
			newState.loading = false;
			newState.file = action.payload;
			return newState;
		case UPLOAD_JSON:
			newState.posts = action.payload;
			newState.loading = false;
			return newState;
		case CLEAR_FILE:
			newState.file = {};
			newState.loading = false;
			return newState;
		default:
			newState.loading = false;
			return newState;
	}
};

export default brichReducer;
