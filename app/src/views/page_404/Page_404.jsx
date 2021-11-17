import { Button } from 'antd';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

const GetRandomError404 = () => {
	let randomNumb = Math.floor(Math.random() * 5);
	const errors = [
		'Ну... как бы это... ты пытаешься сослаться на несуществующий путь (ошибка 404)',
		'Выйди, и зайди нормально!!! (ошибка 404)',
		'Уупс! (ошибка 404)',
		'Тук-тук... (ошибка 404)',
		'Если бы мы знали что это такое, но мы не знаем что это такое (ошибка 404)',
		'Ну... как бы это... ты пытаешься сослаться на несуществующий путь (ошибка 404)',
	];
	return errors[randomNumb];
};

const Page_404 = () => {
	return (
		<div className={style.container}>
			<div className={style.title}>{GetRandomError404()}</div>
			<Link to='/dashboard'>
				<Button className={style.redirect_button} type='primary'>
					На главную
				</Button>
			</Link>
		</div>
	);
};

export default Page_404;
