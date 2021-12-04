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
import {
	getInfoAboutMe,
	sendPost as serviceSendPost,
	getAllPosts as getAllPostsService,
	downloadJSON as downloadJSON_service,
	uploadJSON as uploadJSONService,
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

export const uploadJSON = (file) => {
	return async (dispatch) => {
		try {
			dispatch({ type: REQUEST });
			const formData = new FormData();
			formData.append('file', file);
			console.log(formData);
			const data = await uploadJSONService(formData, {
				'Content-Type': 'multipart/form-data',
			});
			dispatch({ type: UPLOAD_JSON, payload: data });
			message.success('Успешно!');
		} catch {
			message.error('Ошибка');
		}
	};
};

export const clearFileData = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: REQUEST });
			dispatch({ type: CLEAR_FILE });
		} catch {
			message.error('Ошибка');
		}
	};
};
