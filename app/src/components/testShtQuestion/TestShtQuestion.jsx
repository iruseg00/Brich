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
			<div className={style.question_text}>{props.name + ') ' + props.question_text}</div>
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
						<span className={style.text}>Никогда</span>
					</div>
					<div className={style.containerToFirstLast}>
						<Radio className={style.radio + ' ' + style.firstAndLast} value={2}></Radio>
						<span className={style.number}>2</span>
						<span className={style.text}>Почти никогда</span>
					</div>
					<div className={style.containerToFirstLast}>
						<Radio className={style.radio + ' ' + style.firstAndLast} value={3}></Radio>
						<span className={style.number}>3</span>
						<span className={style.text}>Часто</span>
					</div>
					<div className={style.containerToFirstLast}>
						<Radio className={style.radio + ' ' + style.firstAndLast} value={4}></Radio>
						<span className={style.number}>4</span>
						<span className={style.text}>Всегда</span>
					</div>
				</Radio.Group>
			</FormItem>
		</div>
	);
};

export default TestQuestion;
