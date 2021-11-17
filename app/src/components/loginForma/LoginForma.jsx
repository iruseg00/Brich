import { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import style from './style.module.scss';
import { login } from '../../redux/actions/auth';
import { whoAmI } from '../../redux/actions/users';

function LoginForma(props) {
	const [ValidateStatusEmail, setValidateStatusEmail] = useState('validating');
	const [ValidateStatusPass, setValidateStatusPass] = useState('validating');

	const [form] = Form.useForm();

	const onFinish = (values) => {
		props.login(values);
	};
	const onFinishFailed = ({ errorFields }) => {
		if (errorFields[0].name[0] === 'email') setValidateStatusEmail('error');
		if (errorFields[0].name[0] === 'password' || errorFields[1])
			setValidateStatusPass('error');
	};
	const changedField = (e) => {
		if (e.target.id === 'login_email') setValidateStatusEmail('validating');
		else if (e.target.id === 'login_password') setValidateStatusPass('validating');
	};
	return (
		<Form
			form={form}
			className={style.form}
			name='login'
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			on
		>
			<Form.Item
				className={style.wrapper_input}
				label='Email'
				name='email'
				validateStatus={ValidateStatusEmail}
				rules={[
					{
						required: true,
						message: 'Please input your Email!',
						pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
					},
				]}
			>
				<Input size='large' className={style.input} onChange={changedField} />
			</Form.Item>
			<Form.Item
				className={style.wrapper_input}
				label='Пароль'
				name='password'
				validateStatus={ValidateStatusPass}
				rules={[
					{
						required: true,
						message: 'Please input your password!',
						pattern: /[0-9a-zA-Z.!$_-]{6,24}/,
					},
				]}
			>
				<Input.Password size='large' className={style.input} onChange={changedField} />
			</Form.Item>
			<Form.Item>
				<Button
					type='primary'
					htmlType='submit'
					className={style.submit}
					loading={props.auth.loading}
				>
					Войти
				</Button>
			</Form.Item>
		</Form>
	);
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = {
	login,
	whoAmI,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForma);
