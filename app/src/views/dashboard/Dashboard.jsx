/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import ModalWindow from '../../components/modalInfo/ModalWindow';

import TestSelectionLayout from './testSelection/TestSelection';
import PSSUQTestSetupLayout from '../pssuqTestSetup/PSSUQTestSetup';
import SUSTestSetupLayout from '../susTestSetup/SUSTestSetup';
import MDTTestSetupLayout from '../mdtTestSetup/MDTTestSetup';
import ACTestSetupLayout from '../acTestSetup/AcTestSetup';
import DSTestSetupLayout from '../dsTestSetup/DsTestSetup';
import SHTTestSetupLatout from '../shtTestSetup/SHTTestSetup';

import Page_404 from '../page_404/Page_404';
import TestsResultsBoard from '../testResultsBoard/TestResultsBoard';

function MainTests() {
	const [visible, setVisible] = useState(false);
	const { userID } = useSelector((state) => state.users.profile);
	const location = useLocation();
	useEffect(() => {
		if (location.state?.prevState) {
			location.state = undefined;
			setVisible(true);
		}
	}, []);

	return (
		<div>
			<Header />
			<Switch>
				<Route path='/dashboard' exact component={TestSelectionLayout} />
				<Route path='/dashboard/sus' component={SUSTestSetupLayout} />
				<Route path='/dashboard/pssuq' component={PSSUQTestSetupLayout} />
				<Route path='/dashboard/mdt' component={MDTTestSetupLayout} />
				<Route path='/dashboard/ас' component={ACTestSetupLayout} />
				<Route path='/dashboard/дс' component={DSTestSetupLayout} />
				<Route path='/dashboard/шт' component={SHTTestSetupLatout} />
				<Route path='/dashboard/passed_tests' component={TestsResultsBoard} />
				<Route path='*' exact component={Page_404} />
			</Switch>
			<ModalWindow visible={visible} setVisible={setVisible}>
				Во время прохождения теста мы скроем ваши персональные данные. Теперь вы номер -{' '}
				{userID}!
			</ModalWindow>
		</div>
	);
}

export default MainTests;
