import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import ModalWindow from '../modal/ModalWindow';
import style from './style.module.scss';

function TestSetupForm(props) {
	const USER_ID = useSelector((state) => state.users.profile.userID);
	const [visible, setVisible] = React.useState(false);
	const [action, setAction] = React.useState();
	const dispatch = useDispatch();
	const onFinish = (values) => {
		const send = () => () => {
			props.setData({
				testingSystem: values.testingSystem,
				description: values.description,
			});
			dispatch(props.getTest());
			props.func_next();
		};
		setAction(send);
		setVisible(true);
	};

	return (
		<Form onFinish={onFinish} className={style.form} name='testSetup'>
			<div className={style.fields}>
				<span className={style.descText}>Присвоенный ID:</span>
				<FormItem name='id'>
					<Input
						placeholder={USER_ID}
						size='large'
						className={style.input + ' ' + style.input_disabled}
						disabled
					/>
				</FormItem>
			</div>
			<div className={style.fields}>
				<span className={style.descText}>Тестируемая система:</span>
				<FormItem
					rules={[
						{
							required: true,
							message: 'Сначала заполните это поле!',
						},
					]}
					name='testingSystem'
				>
					<Input name='testingSystem' size='large' className={style.input} />
				</FormItem>
			</div>
			<div className={style.fields}>
				<span className={style.descText}>Примечание:</span>
				<FormItem
					rules={[
						{
							required: true,
							message: 'Сначала заполните это поле!',
						},
					]}
					name='description'
				>
					<Input name='description' size='large' className={style.input} />
				</FormItem>
			</div>
			<Link className={style.scanningText} to='/test-scanning'>
				Сканировать имеющийся тест
			</Link>
			<Button type='primary' htmlType='submit' className={style.submit}>
				Начать тест
			</Button>
			<ModalWindow action={action} visible={visible} setVisible={setVisible}>
				Вы уверены, что все данные введены верно?
			</ModalWindow>
		</Form>
	);
}

export default TestSetupForm;
