import React from 'react';
import { Radio } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import style from './style.module.scss';

const TestQuestion = (props) => {
	const [value, setValue] = React.useState(1);

	const onChange = (e) => {
		setValue(e.target.value);
	};
	return (
		<div className={style.container}>
			<div className={style.question_text}>{props.question_text}</div>
			<FormItem
				rules={[
					{
						required: true,
						message: 'Сначала заполните это поле!',
					},
				]}
				name={props.name}
			>
				<Radio.Group className={style.radio_container} onChange={onChange} value={value}>
					<div className={style.containerToFirstLast}>
						<Radio className={style.radio + ' ' + style.firstAndLast} value={1}></Radio>
						<span className={style.number}>1</span>
						<span className={style.text}>неудовлетворительно</span>
					</div>
					<Radio className={style.radio} value={2}></Radio>
					<Radio className={style.radio} value={3}></Radio>
					<Radio className={style.radio} value={4}></Radio>
					<Radio className={style.radio} value={5}></Radio>
					<Radio className={style.radio} value={6}></Radio>
					<Radio className={style.radio} value={7}></Radio>
					<Radio className={style.radio} value={8}></Radio>
					<Radio className={style.radio} value={9}></Radio>
					<div className={style.containerToFirstLast}>
						<Radio className={style.radio + ' ' + style.firstAndLast} value={10}></Radio>
						<span className={style.number}>10</span>
						<span className={style.text}>отлично</span>
					</div>
				</Radio.Group>
			</FormItem>
		</div>
	);
};

export default TestQuestion;
