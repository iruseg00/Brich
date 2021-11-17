import { Spin } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TestingSystemResult from '../testingSystemResult/TestingSystemResult';
import style from './style.module.scss';

const TestingSystemInfo = ({ statePath, date, typeOfTest, action }) => {
	const { testingSystem } = useParams();
	const dispatch = useDispatch();
	useEffect(() => dispatch(action({ testingSystem })), []);
	const testingSystemResults = useSelector((state) => state[statePath].testingSystemTests);
	const loading = useSelector((state) => state[statePath].loading);
	const getTesingSystemComponents = () =>
		testingSystemResults?.map((element) => (
			<TestingSystemResult
				typeOfTest={typeOfTest}
				key={element.ID}
				ID={element.ID}
				testingSystem={element.testingSystem}
				description={element.description}
				date={element.createdAt}
			/>
		));

	return (
		<div className={style.main}>
			{loading ? (
				<Spin className={style.spin} size='large' />
			) : (
				<div>
					<div className={style.testingSystem}>{testingSystem}</div>
					<div className={style.container}>{getTesingSystemComponents()}</div>
				</div>
			)}
		</div>
	);
};

export default TestingSystemInfo;
