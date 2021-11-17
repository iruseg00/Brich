import boxes from '../../assets/images/adjust-solid-2.png';
import Stepps from '../../components/steps/Steps';
import StepOneComponenet from './step_1/Step_1';
import StepTwoComponenet from './step_2/Step_2';
import StepThreeComponenet from './step_3/Step_3';

function MDTTest() {
	return (
		<Stepps
			stepOne={StepOneComponenet}
			stepTwo={StepTwoComponenet}
			stepThree={StepThreeComponenet}
			img={boxes}
			title_of_test='Шкала тревоги Спилбергера - Ханина'
			Описание
		/>
	);
}

export default MDTTest;
