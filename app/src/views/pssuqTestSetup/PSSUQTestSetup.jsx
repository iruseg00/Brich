import boxes from '../../assets/images/cubes-solid_2.svg';
import Stepps from '../../components/steps/Steps';
import StepOneComponenet from './step_1/Step_1';
import StepTwoComponenet from './step_2/Step_2';
import StepThreeComponenet from './step_3/Step_3';

function PSSUQTest() {
	return (
		<Stepps
			stepOne={StepOneComponenet}
			stepTwo={StepTwoComponenet}
			stepThree={StepThreeComponenet}
			img={boxes}
			title_of_test='Post-Study System Usability Questionnaire'
		/>
	);
}

export default PSSUQTest;
