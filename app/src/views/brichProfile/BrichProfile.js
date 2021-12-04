import FileSaver from 'file-saver';
import { Button, Form, Input, Spin, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getProfileInfo,
	sendPost as sendPostAction,
	getAllPosts,
	downloadJSON,
	uploadJSON,
} from '../../redux/actions/brich';
import style from './style.module.scss';
import FormItem from 'antd/lib/form/FormItem';

const BrichProfile = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProfileInfo());
	}, [dispatch]);
	const state = useSelector((store) => store.brich.about);
	const posts = useSelector((store) => store.brich.posts);
	const loading = useSelector((store) => store.brich.loading);
	const file = useSelector((store) => store.brich.file);
	const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

	const sendPost = (sendData) => {
		const objectToSend = {
			title: sendData.titleInput,
			text: sendData.descriptionInput,
		};
		dispatch(sendPostAction(objectToSend));
	};

	const renderPosts = (arr) => {
		return arr.map((el) => {
			return (
				<div key={el.postId}>
					<div>Заголовок: {el.title}</div>
					<div>Текст: {el.text}</div>
				</div>
			);
		});
	};

	async function getData(dataa) {
		console.log(dataa);
		let obj = await fetch(dataa);
		console.log(obj);
		dispatch(uploadJSON(obj));
	}

	if (file.data) {
		console.log(file);
		const blob = new Blob([JSON.stringify(file.data)], { type: 'application/json' });
		FileSaver.saveAs(blob, 'posts.json');
	}

	return loading ? (
		<div className={style.spinContainer}>
			<Spin indicator={antIcon} size='large' />
		</div>
	) : (
		<div className={style.container}>
			<div className={style.onfoString}>Имя: {state?.data?.surname}</div>
			<div className={style.onfoString}>Фамилия: {state?.data?.middleName}</div>
			<div className={style.onfoString}>Почта: {state?.data?.email}</div>
			<div className={style.onfoString}>ID пользователя: {state?.data?.userID}</div>
			<Form className={style.form} onFinish={sendPost} name='postForm'>
				<FormItem className={style.formInput} name='titleInput'>
					<Input placeholder='Введите заголовок поста' />
				</FormItem>
				<FormItem className={style.formInput} name='descriptionInput'>
					<Input placeholder='Введите текст поста' />
				</FormItem>
				<Button className={style.btn} htmlType='submit' type='primary'>
					Отправить
				</Button>
				<Button className={style.btn} onClick={() => dispatch(getAllPosts())} type='default'>
					Получить посты
				</Button>
				<Button className={style.btn} onClick={() => dispatch(downloadJSON())} type='default'>
					Скачать посты (JSON)
				</Button>
				<Upload showUploadList={false} onChange={getData}>
					<Button icon={<UploadOutlined />}>Выгрузить из JSON</Button>
				</Upload>
			</Form>
			{console.log(posts)}
			{posts.data ? renderPosts(posts.data) : null}
		</div>
	);
};

export default BrichProfile;
