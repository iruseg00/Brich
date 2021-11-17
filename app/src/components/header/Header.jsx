import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Drawer } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { logout } from '../../redux/actions/auth';
import style from './style.module.scss';
import barsImage from '../../assets/images/bars-solid_2.svg';
import PC from './../../assets/images/vit.png';

const Header = () => {
	const [visible, setVisible] = useState(false);
	const userData = useSelector((state) => state.users.profile);
	const dispatch = useDispatch();
	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<div className={style.container}>
			<Drawer
				className={style.menu}
				placement='left'
				width='330'
				closable={false}
				onClose={onClose}
				visible={visible}
			>
				<div className={style.links_container}>
					<div className={style.flex_1}>
						<Link className={style.side_bar_item} to='/dashboard' onClick={onClose}>
							Выбор теста
						</Link>
						<Link className={style.side_bar_item} to='/dashboard/profile' onClick={onClose}>
							Личный кабинет
						</Link>
						<Link
							className={style.side_bar_item}
							to='/dashboard/passed_tests'
							onClick={onClose}
						>
							Пройденные тесты
						</Link>
					</div>

					<div className={style.container_to_PC}>
						<img src={PC} alt='PC' />
					</div>
					<Link onClick={() => dispatch(logout())} to='/login'>
						<div className={style.side_bar_item + ' ' + style.exit_link}>Выйти из аккаунта</div>
					</Link>
				</div>
			</Drawer>

			<div className={style.left_items}>
				<div className={style.bar_img_container}>
					<img onClick={showDrawer} className={style.barImg} src={barsImage} alt='barsImage' />
				</div>
				<div className={style.title}>Тестирование</div>
			</div>

			<div className={style.avatar_container}>
				<span className={style.userID}>#{userData.userID}</span>
				<Avatar size={64} src={userData.photo} icon={<UserOutlined />} />
			</div>
		</div>
	);
};

export default Header;
