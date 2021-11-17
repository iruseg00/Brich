import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import TestMdtQuestions from '../../../components/testMdtQuestion/TestMdtQuestion';
import { Button, message, Form, Spin } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { getResults } from '../../../redux/actions/mdtTest';
import ModalWindow from '../../../components/modal/ModalWindow';

const Step_2 = (props) => {
	const [visible, setVisible] = React.useState(false);
	const [action, setAction] = React.useState();
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const questions = useSelector((state) => state.mdtTest.questions);
	const loading = useSelector((state) => state.mdtTest.loading);
	const arrayOfQuestions = questions?.map((element) => (
		<TestMdtQuestions
			name={element.adjectiveID}
			key={element.adjectiveID}
			questionText={element.adjective}
		/>
	));
	const error = () => {
		message.error('Должно быть выбрано не более 5 прилагательных!');
	};
	const error2 = () => {
		message.error('Должно быть выбрано 5 прилагательных!');
	};
	const onReset = () => {
		form.resetFields();
	};
	const PostAnswers = (values) => {
		const send = () => () => {
			const arrayOfAnswersToPost = [];
			for (let item in values) {
				if (values[item] !== 0) {
					arrayOfAnswersToPost.push(item.toString());
				} else if (values[item] === 'button') {
					continue;
				}
			}
			arrayOfAnswersToPost.pop();
			if (arrayOfAnswersToPost.length === 5) {
				let answer_to_post = {
					answers: arrayOfAnswersToPost,
					testingSystem: props.getData.testingSystem,
					description: props.getData.description,
				};
				dispatch(getResults(answer_to_post));
				props.func_next();
			} else if (arrayOfAnswersToPost.length < 5) {
				error2();
			} else {
				onReset();
				error();
			}
			console.log(arrayOfAnswersToPost);
		};
		setAction(send);
		setVisible(true);
	};

	return (
		<Form form={form} name='Formm' onFinish={PostAnswers}>
			<div className={style.container}>
				<div className={style.title}>
					Выберите до 5 прилагательных, которые, по Вашему мнению, характеризуют интерфейс
					программы{' '}
				</div>
				<div className={style.content_container}>
					{loading ? <Spin className={style.spin} size='large' /> : arrayOfQuestions}
				</div>
				<FormItem name='button'>
					<Button type='primary' htmlType='submit' className={style.submit}>
						Подтвердить
					</Button>
				</FormItem>
			</div>
			<ModalWindow action={action} visible={visible} setVisible={setVisible}>
				Вы уверены, что все данные введены верно?
			</ModalWindow>
		</Form>
	);
};

export default Step_2;
