import React from 'react';
import { Radio } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import style from './style.module.scss';

const TestQuestion = ({ questionText, name }) => {
	const [value, setValue] = React.useState(1);

	const onChange = (e) => {
		setValue(e.target.value);
	};
	return (
		<div className={style.container}>
			<div className={style.question_text}>{questionText}</div>
			<FormItem initialValue={0} name={name}>
				<Radio.Group className={style.radio_container} onChange={onChange} value={value}>
					<Radio className={style.radio} value={1}></Radio>
				</Radio.Group>
			</FormItem>
		</div>
	);
};

export default TestQuestion;
