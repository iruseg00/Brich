import { notification } from 'antd';
import {
	WHO_AM_I_REQUEST,
	WHO_AM_I_SUCCESS,
	WHO_AM_I_FAILED,
} from '../actionsTypes/users';

const initialState = {
	profile: {},
	isProfileLoading: false,
};

export default function usersReducer(state = initialState, action) {
	const newState = { ...state };
	switch (action.type) {
		case WHO_AM_I_REQUEST:
			newState.isProfileLoading = true;
			return newState;
		case WHO_AM_I_SUCCESS:
			newState.isProfileLoading = false;
			newState.profile = action.payload;
			newState.profile.userID === 1
				? notification.open({
						message: 'Вы администратор приложения!',
						description:
							'Вы имеете доступ ко всем публикациям пользователей этого прилоожения. Также вы можете выгрузить все публикации в .json-файл',
				  })
				: notification.open({
						message: 'Вы пользователь приложения!',
						description: 'Вы не имеете прав!!!',
				  });
			return newState;
		case WHO_AM_I_FAILED:
			newState.isProfileLoading = false;
			return newState;
		default:
			return state;
	}
}
