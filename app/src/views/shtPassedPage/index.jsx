import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import PassedTestOverview from '../../components/passedTestOverview/PassedTestOverview';
import PassedTestResult from '../../components/passedTest/passedTestResult/PassedTestResult';
import { getAllShtAnswers } from '../../redux/actions/shtTest';
import image from '../../assets/images/cubes-solid_1.svg';
import style from './style.module.scss';

const DsPassedPage = ({ setDate }) => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getAllShtAnswers()), []);
	const answers = useSelector((state) => state.shtTest.allAnswers);
	const loading = useSelector((state) => state.shtTest.loading);
	const getContent = () =>
		answers.map((item, index) => (
			<Link to={`/dashboard/passed_tests/шт/${item.rows[0].testingSystem}`}>
				<PassedTestResult
					key={index}
					testingSystem={item.rows[0].testingSystem}
					count={item.count}
					date={item.rows[0].createdAt}
					setDate={setDate}
				/>
			</Link>
		));
	return (
		<div className={style.container}>
			{loading ? (
				<Spin size='large' className={style.spin} />
			) : (
				<div>
					<PassedTestOverview
						image={image}
						title='ДС'
						subTitle='Диагностика доминирующего настроения'
					/>
					<div className={style.containerToResults}>{getContent()}</div>
				</div>
			)}
		</div>
	);
};

export default DsPassedPage;
