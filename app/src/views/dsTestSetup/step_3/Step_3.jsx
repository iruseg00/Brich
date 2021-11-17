/* eslint-disable eqeqeq */
import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { Button, Progress } from 'antd';
import { Link } from 'react-router-dom';

const Step_3 = (props) => {
	const results = useSelector((state) => state.dsTest.results);
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
							format={() => `${results.AK}`}
							percent={getPercent(results.AK)}
						/>
						<p className={style.desc}>АК</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.BO}`}
							percent={getPercent(results.BO)}
						/>
						<p className={style.desc}>Бо</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.TO}`}
							percent={getPercent(results.TO)}
						/>
						<p className={style.desc}>То</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.PA}`}
							percent={getPercent(results.PA)}
						/>
						<p className={style.desc}>Ра</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.SP}`}
							percent={getPercent(results.SP)}
						/>
						<p className={style.desc}>Сп</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.US}`}
							percent={getPercent(results.US)}
						/>
						<p className={style.desc}>Ус</p>
					</div>
					<div className={style.container_to_progress_component_1}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.UD}`}
							percent={getPercent(results.UD)}
						/>
						<p className={style.desc}>Уд</p>
					</div>
					<div className={style.container_to_progress_component_2}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.PO}`}
							percent={getPercent(results.PO)}
						/>
						<p className={style.desc}>По</p>
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
