import {
	REQUEST,
	SUCCESS_REQUEST,
	FAILED_REQUEST,
	ABOUT_REQUEST,
	GET_POSTS,
	DOWNLOAD_JSON,
} from '../actionsTypes/brich';
import {
	getInfoAboutMe,
	sendPost as serviceSendPost,
	getAllPosts as getAllPostsService,
	downloadJSON as downloadJSON_service,
} from '../../services/brich';
import { message } from 'antd';

export const getProfileInfo = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: REQUEST });
			const data = await getInfoAboutMe();
			dispatch({ type: ABOUT_REQUEST, payload: data });
		} catch {
			dispatch({ type: FAILED_REQUEST });
		}
	};
};

export const sendPost = (data) => {
	return async (dispatch) => {
		try {
			dispatch({ type: REQUEST });
			const info = await serviceSendPost(data);
			dispatch({ type: SUCCESS_REQUEST, payload: info });
			message.success('Успешно!');
		} catch {
			message.error('Ошибка');
		}
	};
};

export const getAllPosts = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: REQUEST });
			const posts = await getAllPostsService();
			dispatch({ type: GET_POSTS, payload: posts });
			message.success('Успешно!');
		} catch {
			message.error('Ошибка');
		}
	};
};

export const downloadJSON = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: REQUEST });
			const file = await downloadJSON_service();
			dispatch({ type: DOWNLOAD_JSON, payload: file });
			message.success('Успешно!');
		} catch {
			message.error('Ошибка');
		}
	};
};
