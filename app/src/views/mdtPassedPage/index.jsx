import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import PassedTestOverview from '../../components/passedTestOverview/PassedTestOverview';
import PassedTestResult from '../../components/passedTest/passedTestResult/PassedTestResult';
import { getAllMdtAnswers } from '../../redux/actions/mdtTest';
import image from '../../assets/images/cubes-solid_1.svg';
import style from './style.module.scss';

const MdtPassedPage = ({ setDate }) => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getAllMdtAnswers()), []);
	const answers = useSelector((state) => state.mdtTest.allAnswers);
	const loading = useSelector((state) => state.mdtTest.loading);
	const getContent = () =>
		answers.map((item, index) => (
			<Link to={`/dashboard/passed_tests/mdt/${item.rows[0].testingSystem}`}>
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
						title='MDT'
						subTitle='Microsoft Desirability Toolkit'
					/>
					<div className={style.containerToResults}>{getContent()}</div>
				</div>
			)}
		</div>
	);
};

export default MdtPassedPage;
