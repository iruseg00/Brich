import { useEffect, useState } from 'react';
import { getInfoAboutMe } from '../../services/brich';
import style from './style.module.scss';

const BrichProfile = () => {
	const [state, setState] = useState(null);
	const getInfo = async () => {
		let data = await getInfoAboutMe();
		setState(data);
	};
	useEffect(() => {
		getInfo();
	}, []);
	state && console.log(state, '----------------------------------------------------');
	return (
		<div>
			<div>ss</div>
		</div>
	);
};

export default BrichProfile;
