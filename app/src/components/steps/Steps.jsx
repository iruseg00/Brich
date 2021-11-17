import React from 'react';
import { Steps } from 'antd';
import style from './style.module.scss';

const Stepps = (props) => {
	const [current, setCurrent] = React.useState(0);
	const [data, setData] = React.useState({});
	const { Step } = Steps;
	const next = () => {
		setCurrent(current + 1);
	};
	const steps = [
		{
			title: 'Начало',
			content: (
				<props.stepOne
					img={props.img}
					title_of_test={props.title_of_test}
					func_next={next}
					setData={(rest) => setData({ ...data, ...rest })}
				/>
			),
		},
		{
			title: 'Тест',
			content: (
				<props.stepTwo title_of_test={props.title_of_test} func_next={next} getData={data} />
			),
		},
		{
			title: 'Результат',
			content: <props.stepThree img={props.img} />,
		},
	];

	return (
		<span className={style.container_to_steps}>
			<Steps className={style.all_steps} current={current}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className={style.steps_conent_my}>{steps[current].content}</div>
		</span>
	);
};

export default Stepps;
