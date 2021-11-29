import { message } from 'antd';
import {
	REQUEST,
	SUCCESS_REQUEST,
	FAILED_REQUEST,
	ABOUT_REQUEST,
	GET_POSTS,
} from '../actionsTypes/brich';

const initialState = {
	about: {},
	loading: false,
	info: null,
	posts: {},
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
		default:
			newState.loading = false;
			return newState;
	}
};

export default brichReducer;
