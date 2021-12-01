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
