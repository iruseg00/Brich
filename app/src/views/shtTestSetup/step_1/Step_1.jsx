import style from './style.module.scss';
import TestSetupForm from '../../../components/testSetupForm/TestSetupForm';
import { getShtTest } from '../../../redux/actions/shtTest';

const Step_1 = (props) => {
	return (
		<div className={style.container}>
			<div className={style.title}>{props.title_of_test}</div>
			<div className={style.container_to_TestSetup}>
				<img className={style.img_left} src={props.img} alt='' />
				<TestSetupForm
					getTest={getShtTest}
					func_next={props.func_next}
					setData={props.setData}
				/>
			</div>
		</div>
	);
};

export default Step_1;
