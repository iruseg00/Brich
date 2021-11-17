/* eslint-disable eqeqeq */
import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { Button, Progress } from 'antd';
import { Link } from 'react-router-dom';

const Step_3 = (props) => {
	const results = useSelector((state) => state.shtTest.results);
	console.log(results);
	const getPercent = (element) => {
		if (element == 'низкая') {
			return 10;
		} else if (element == 'средняя') {
			return 50;
		} else if (element == 'высокая') {
			return 90;
		} else {
			return 50;
		}
	};
	return (
		<div className={style.container}>
			<div className={style.title}>System Usability Scale</div>
			<div className={style.img_and_progress}>
				<div className={style.image_container}>
					<img className={style.image} src={props.img} alt='img' />
				</div>
				<div className={style.progress}>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.situational}`}
							percent={getPercent(results.situational)}
						/>
						<p className={style.desc}>Ситуативная тревожность</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.personal}`}
							percent={getPercent(results.personal)}
						/>
						<p className={style.desc}>Личная тревожность</p>
					</div>
				</div>
			</div>
			<span className={style.pdf}>Скачать PDF</span>
			<div className={style.containerToButton}>
				<Button type='primary' htmlType='submit' className={style.submit}>
					<Link className={style.linkButton} to='/dashboard'>
						Подтвердить
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Step_3;
