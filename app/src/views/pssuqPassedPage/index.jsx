import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import PassedTestOverview from '../../components/passedTestOverview/PassedTestOverview';
import PassedTestResult from '../../components/passedTest/passedTestResult/PassedTestResult';
import image from '../../assets/images/cubes-solid_1.svg';
import style from './style.module.scss';
import { getAllPssuqAnswers } from '../../redux/actions/pssuqTest';

const PssuqPassedPage = ({ setDate }) => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getAllPssuqAnswers()), []);
	const answers = useSelector((state) => state.pssuqTest.allAnswers);
	const loading = useSelector((state) => state.pssuqTest.loading);
	const getContent = () =>
		answers.map((item, index) => (
			<Link to={`/dashboard/passed_tests/pssuq/${item.rows[0].testingSystem}`}>
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
		<div>
			{loading ? (
				<Spin size='large' className={style.spin} />
			) : (
				<div className={style.container}>
					<PassedTestOverview
						image={image}
						title='PSSUQ'
						subTitle='Post-Study System Usability Questionnaire'
					/>
					<div className={style.containerToResults}>{getContent()}</div>
				</div>
			)}
		</div>
	);
};

export default PssuqPassedPage;
