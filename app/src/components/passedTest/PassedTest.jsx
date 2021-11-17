import { Link } from 'react-router-dom';
import style from './style.module.scss';

const PassedTest = (props) => {
	return (
		<Link to={`/dashboard/passed_tests/${props.title.toLowerCase()}`}>
			<div className={style.container}>
				<img className={style.image} src={props.image} alt='img' />
				<span className={style.title}>{props.title}</span>
			</div>
		</Link>
	);
};

export default PassedTest;
