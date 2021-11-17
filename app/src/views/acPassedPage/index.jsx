import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import PassedTestOverview from '../../components/passedTestOverview/PassedTestOverview';
import PassedTestResult from '../../components/passedTest/passedTestResult/PassedTestResult';
import { getAllAcAnswers } from '../../redux/actions/acTest';
import image from '../../assets/images/balance-scale-solid 1.png';
import style from './style.module.scss';

const SusPassedPage = ({ setDate }) => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getAllAcAnswers()), []);
	const answers = useSelector((state) => state.acTest.allAnswers);
	const loading = useSelector((state) => state.acTest.loading);
	const getContent = () =>
		answers.map((item, index) => (
			<Link to={`/dashboard/passed_tests/ac/${item.rows[0].testingSystem}`}>
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
					<PassedTestOverview image={image} title='AC' subTitle='Актуальное состояние' />
					<div className={style.containerToResults}>{getContent()}</div>
				</div>
			)}
		</div>
	);
};

export default SusPassedPage;
