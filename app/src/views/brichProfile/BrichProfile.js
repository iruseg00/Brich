import FileSaver from 'file-saver';
import { Button, Form, Input, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getProfileInfo,
	sendPost as sendPostAction,
	getAllPosts,
	downloadJSON,
	uploadJSON,
	clearFileData,
	adminGetPosts,
} from '../../redux/actions/brich';
import style from './style.module.scss';
import FormItem from 'antd/lib/form/FormItem';

const BrichProfile = () => {
	const dispatch = useDispatch();
	let { about: state, posts, loading, file } = useSelector((store) => store.brich);
	let userID = useSelector((store) => store.users.profile.userID);
	let isProfileLoading = useSelector((store) => store.users.isProfileLoading);
	useEffect(() => {
		dispatch(getProfileInfo());
	}, [dispatch, userID]);

	console.log('---------', state, posts, loading, file);
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
			return userID == 1 ? (
				<div className={style.postAdmin} key={el.postId}>
					<div className={style.userName}>
						{el.user.name} {el.user.surname}
					</div>
					{el.posts.map((el, index) => {
						return (
							<div className={style.post}>
								<div className={style.titleOfPost}>{el.title}</div>
								<div>{el.text}</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className={style.post} key={el.postId}>
					<div className={style.titleOfPost}>{el.title}</div>
					<div>{el.text}</div>
				</div>
			);
		});
	};

	async function getData() {
		const input = document.createElement('input');
		input.type = 'file';
		input.addEventListener('change', function (event) {
			const File = event.target.files[0];
			console.log(File);
			File && dispatch(uploadJSON(File));
		});
		input.click();
	}

	if (file.data) {
		const blob = new Blob([JSON.stringify(file.data)], {
			type: 'application/json',
		});
		FileSaver.saveAs(blob, 'posts.json');
		dispatch(clearFileData());
	}
	const userProfile = useMemo(() => {
		return (
			<div className={style.containerToProfile}>
				<div className={style.onfoString}>Имя: {state?.data?.surname}</div>
				<div className={style.onfoString}>Фамилия: {state?.data?.middleName}</div>
				<div className={style.onfoString}>Почта: {state?.data?.email}</div>
				<div className={style.onfoString}>ID пользователя: {state?.data?.userID}</div>
			</div>
		);
	}, [state.data]);

	const userPosts = useMemo(
		() => (posts.data ? renderPosts(posts.data) : null),
		[posts.data]
	);

	return loading || isProfileLoading ? (
		<div className={style.spinContainer}>
			<Spin indicator={antIcon} size='large' />
		</div>
	) : (
		<div className={style.container}>
			{userProfile}
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
				<Button
					className={style.btn}
					onClick={() => {
						userID !== 1 ? dispatch(getAllPosts()) : dispatch(adminGetPosts());
					}}
					type='default'
				>
					Получить посты
				</Button>
				<Button className={style.btn} onClick={() => dispatch(downloadJSON())} type='default'>
					Скачать посты (JSON)
				</Button>

				<Button onClick={getData} icon={<UploadOutlined />}>
					Выгрузить из JSON
				</Button>
			</Form>
			{userPosts}
			{console.log(posts.data)}
		</div>
	);
};

export default BrichProfile;
