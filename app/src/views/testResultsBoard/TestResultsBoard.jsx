import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import PassedTests from '../passedTests/index';
import SusPassedPage from '../susPassedPage/Index';
import PssuqPassedPage from '../pssuqPassedPage/index';
import MdtPassedPage from '../mdtPassedPage/index';
import AcPassedPage from '../acPassedPage/index';
import DsPassedPage from '../dsPassedPage/index';
import ShtPassedPage from '../shtPassedPage/index';

import TestingSystemInfo from '../../components/testingSystemInfo/TestingSystemInfo';
import Page_404 from '../page_404/Page_404';

import Step3Pssuq from '../pssuqTestSetup/step_3Review/Step_3';
import imagePssuq from '../../assets/images/cubes-solid_2.svg';
import Step3Mdt from '../mdtTestSetup/step_3Review/Step_3';
import imageMdt from '../../assets/images/cubes-solid_1.svg';
import Step3Sus from '../susTestSetup/step_3Review/Step_3';
import imageSus from '../../assets/images/cubes-solid_1.svg';
import Step3Ac from '../acTestSetup/step_3Review/Step_3';
import imageAC from '../../assets/images/balance-scale-solid 1.png';
import Step3Ds from '../dsTestSetup/step_3Review/Step_3';
import Step3Sht from '../shtTestSetup/step_3Review/Step_3';

import { getTestingSystemResults as susAction } from '../../redux/actions/susTest';
import { getTestingSystemResults as pssuqAction } from '../../redux/actions/pssuqTest';
import { getTestingSystemResults as mdtAction } from '../../redux/actions/mdtTest';
import { getTestingSystemResults as acAction } from '../../redux/actions/acTest';
import { getTestingSystemResults as dsAction } from '../../redux/actions/dsTest';
import { getTestingSystemResults as shtAction } from '../../redux/actions/shtTest';

const TestsResultsBoard = () => {
	const [date, setDate] = useState();
	return (
		<Switch>
			<Route path='/dashboard/passed_tests' exact component={PassedTests} />
			<Route
				path='/dashboard/passed_tests/mdt/:testingSystem/:id'
				render={() => <Step3Mdt action={mdtAction} img={imageMdt} />}
			/>
			<Route
				path='/dashboard/passed_tests/pssuq/:testingSystem/:id'
				render={() => <Step3Pssuq action={pssuqAction} img={imagePssuq} />}
			/>
			<Route
				path='/dashboard/passed_tests/sus/:testingSystem/:id'
				render={() => <Step3Sus action={susAction} img={imageSus} />}
			/>
			<Route
				path='/dashboard/passed_tests/ac/:testingSystem/:id'
				render={() => <Step3Ac action={acAction} img={imageAC} />}
			/>
			<Route
				path='/dashboard/passed_tests/дс/:testingSystem/:id'
				render={() => <Step3Ds action={dsAction} img={imageAC} />}
			/>
			<Route
				path='/dashboard/passed_tests/шт/:testingSystem/:id'
				render={() => <Step3Sht action={shtAction} img={imageAC} />}
			/>
			<Route
				path='/dashboard/passed_tests/sus/:testingSystem'
				render={() => (
					<TestingSystemInfo
						typeOfTest='SUS'
						action={susAction}
						statePath='susTest'
						date={date}
					/>
				)}
			/>
			<Route
				path='/dashboard/passed_tests/sus'
				render={() => <SusPassedPage setDate={setDate} />}
			/>
			<Route
				path='/dashboard/passed_tests/шт/:testingSystem'
				render={() => (
					<TestingSystemInfo
						typeOfTest='ШТ'
						action={shtAction}
						statePath='shtTest'
						date={date}
					/>
				)}
			/>
			<Route
				path='/dashboard/passed_tests/шт'
				render={() => <ShtPassedPage setDate={setDate} />}
			/>
			<Route
				path='/dashboard/passed_tests/pssuq/:testingSystem'
				render={() => (
					<TestingSystemInfo
						typeOfTest='PSSUQ'
						action={pssuqAction}
						statePath='pssuqTest'
						date={date}
					/>
				)}
			/>
			<Route
				path='/dashboard/passed_tests/ac/:testingSystem'
				render={() => (
					<TestingSystemInfo
						typeOfTest='AC'
						action={acAction}
						statePath='acTest'
						date={date}
					/>
				)}
			/>
			<Route
				path='/dashboard/passed_tests/ас'
				render={() => <AcPassedPage setDate={setDate} />}
			/>
			<Route
				path='/dashboard/passed_tests/дс/:testingSystem'
				render={() => (
					<TestingSystemInfo
						typeOfTest='ДС'
						action={dsAction}
						statePath='dsTest'
						date={date}
					/>
				)}
			/>
			<Route
				path='/dashboard/passed_tests/дс'
				render={() => <DsPassedPage setDate={setDate} />}
			/>
			<Route
				path='/dashboard/passed_tests/pssuq'
				render={() => <PssuqPassedPage setDate={setDate} />}
			/>
			<Route
				path='/dashboard/passed_tests/mdt/:testingSystem'
				render={() => (
					<TestingSystemInfo
						typeOfTest='MDT'
						action={mdtAction}
						statePath='mdtTest'
						date={date}
					/>
				)}
			/>
			<Route
				path='/dashboard/passed_tests/mdt'
				render={() => <MdtPassedPage setDate={setDate} />}
			/>
			<Route path='/*' exact component={Page_404} />
		</Switch>
	);
};

export default TestsResultsBoard;
