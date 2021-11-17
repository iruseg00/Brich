import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { Button, Progress } from 'antd';
import { Link } from 'react-router-dom';

const Step_3 = (props) => {
	const results = useSelector((state) => state.pssuqTest.results);
	return (
		<div className={style.container}>
			<div className={style.title}>Результат теста (PSSUQ)</div>
			<div className={style.img_and_progress}>
				<div className={style.image_container}>
					<img className={style.image} src={props.img} alt='img' />
				</div>
				<div className={style.progress}>
					<div className={style.container_to_progress_component + ' ' + style.mark}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='16'
							strokeColor='#559AC8'
							percent={results.value}
						/>
						<p className={style.desc}>Общая оценка</p>
					</div>
					<div className={style.container_to_progress_component + ' ' + style.qualityUI}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							percent={results.qualityUI}
						/>
						<p className={style.desc}>Качество интерфейса</p>
					</div>
					<div
						className={style.container_to_progress_component + ' ' + style.qualityInfoSupport}
					>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							percent={results.qualityInfoSupport}
						/>
						<p className={style.desc}>Качество информационной поддержки</p>
					</div>
					<div className={style.container_to_progress_component + ' ' + style.type}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							trailColor='#559AC8'
							format={() => results.type}
						/>
						<p className={style.desc}>Полезность системы</p>
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
