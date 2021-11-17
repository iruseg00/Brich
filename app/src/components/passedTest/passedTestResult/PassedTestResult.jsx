import style from './style.module.scss';

const PassedTestResult = ({ setDate, testingSystem, count, date }) => {
	const editState = () => setDate(date);
	return (
		<div onClick={editState} className={style.container}>
			<span className={style.testingSystem}>{testingSystem}</span>
			<span className={style.count}>Количество: {count}</span>
		</div>
	);
};

export default PassedTestResult;
