import React from 'react';
import PassedTest from '../../components/passedTest/PassedTest';
import style from './style.module.scss';
import susImg from '../../assets/images/cubes-solid_1.svg';
import pssuqImg from '../../assets/images/cubes-solid_2.svg';
import mdtImg from '../../assets/images/Vector.svg';
import acImg from '../../assets/images/balance-scale-solid 1.png';
import dsImg from '../../assets/images/adjust-solid 1.png';
import shtImg from '../../assets/images/adjust-solid-2.png';
import { getAllSusAnswers } from '../../redux/actions/susTest';
import { getAllPssuqAnswers } from '../../redux/actions/pssuqTest';
import { getAllMdtAnswers } from '../../redux/actions/mdtTest';

const PassedTests = () => {
	return (
		<div className={style.general}>
			<div className={style.generalTitle}>Пройденные тесты</div>
			<div className={style.container}>
				<PassedTest image={susImg} title={'SUS'} action={getAllSusAnswers} />
				<PassedTest image={pssuqImg} title={'PSSUQ'} action={getAllPssuqAnswers} />
				<PassedTest image={mdtImg} title={'MDT'} action={getAllMdtAnswers} />
				<PassedTest image={acImg} title={'АС'} action={getAllMdtAnswers} />
				<PassedTest image={dsImg} title={'ДС'} action={getAllMdtAnswers} />
				<PassedTest image={shtImg} title={'ШТ'} action={getAllMdtAnswers} />
			</div>
		</div>
	);
};

export default PassedTests;
