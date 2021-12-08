import api from '../helper/api';

export const getInfoAboutMe = () => {
	return api('users/me');
};

export const sendPost = (data) => {
	return api('posts/create', 'POST', data);
};

export const getAllPosts = () => {
	return api('posts/all');
};

export const downloadJSON = () => {
	return api('posts/download', 'POST');
};

export const uploadJSON = (file, headers = {}) => {
	return api('posts/upload', 'POST', file, headers);
};

export const adminGetPosts = () => {
	return api('users/get_all');
};
