import boxes from '../../assets/images/cubes-solid_1.svg';
import Stepps from '../../components/steps/Steps';
import StepOneComponent from './step_1/Step_1';
import StepTwoComponent from './step_2/Step_2';
import StepThreeComponent from './step_3/Step_3';

function SUSTest() {
	return (
		<Stepps
			stepOne={StepOneComponent}
			stepTwo={StepTwoComponent}
			stepThree={StepThreeComponent}
			img={boxes}
			title_of_test='System Usability Scale'
		/>
	);
}

export default SUSTest;
