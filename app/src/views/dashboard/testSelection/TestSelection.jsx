import React from 'react';
import TestItem from '../../../components/testChooseItem/TestChooseItem';

function TestSelection() {
	return (
		<React.Fragment>
			<TestItem
				abbreviation='SUS'
				decryption='System Usability Scale'
				description='Описание'
			/>
			<TestItem
				abbreviation='PSSUQ'
				decryption='Post-Study System Usability Questionnaire'
				description='Описание'
			/>
			<TestItem
				abbreviation='MDT'
				decryption='Post-Study System Usability Questionnaire'
				description='Описание'
			/>
			<TestItem abbreviation='АС' decryption='Актуальное состояние' description='Описание' />
			<TestItem
				abbreviation='ДС'
				decryption='Диагностика доминирующего настроения'
				description='Описание'
			/>
			<TestItem
				abbreviation='ШТ'
				decryption='Шкала тревоги 
				Спилбергера - Ханина'
				description='Описание'
			/>
		</React.Fragment>
	);
}

export default TestSelection;
