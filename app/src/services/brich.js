import axios from 'axios';
import api from '../helper/api';

export const getInfoAboutMe = () => {
	return api('users/me');
};
