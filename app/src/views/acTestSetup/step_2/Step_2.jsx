import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Spin } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import TestAcQuestion from '../../../components/testAcQuestion/TestAcQuestion';
import { getResults } from '../../../redux/actions/acTest';
import ModalWindow from '../../../components/modal/ModalWindow';
import style from './style.module.scss';

const Step_2 = (props) => {
	const [visible, setVisible] = React.useState(false);
	const [action, setAction] = React.useState();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.acTest.loading);
	const questions = useSelector((state) => state.acTest.questions);
	let sex = useSelector((store) => store.users.profile.sex);
	if (sex == 'M' || sex == 'М') {
		sex = 'm';
	}
	console.log(questions);
	const arrayOfQuestions = questions?.map((element) => (
		<TestAcQuestion
			name={element.questionID}
			key={element.questionID}
			question_text={element.question}
		/>
	));
	const PostAnswers = (values) => {
		const send = () => () => {
			let arrayOfAnswers = [];
			for (let item in values) {
				arrayOfAnswers[item - 1] = values[item];
			}
			let arrayOfAnswersToPost = arrayOfAnswers.map((element, index) => {
				return element;
			});
			let answer_to_post = {
				answers: arrayOfAnswersToPost,
				testingSystem: props.getData.testingSystem,
				description: props.getData.description,
				sex: sex.toLowerCase(),
			};
			console.log(answer_to_post);
			dispatch(getResults(answer_to_post));
			props.func_next();
		};
		setAction(send);
		setVisible(true);
	};

	return (
		<Form name='Form' onFinish={PostAnswers}>
			<div className={style.container}>
				<div className={style.title}>{props.title_of_test}</div>
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
