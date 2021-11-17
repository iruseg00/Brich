import React from 'react';
import { Button, Modal } from 'antd';
import style from './style.module.scss';

const ModalWindow = ({ children, action = () => {}, visible, setVisible }) => {
	const handleOk = async () => {
		await action();
		setVisible(false);
	};
	const handleCancel = () => {
		setVisible(false);
	};
	return (
		<Modal
			centered
			bodyStyle={{
				border: '1px solid black',
				borderRadius: '10px',
				backgroundColor: '#e6e6e6',
				height: '216px',
				width: '527px',
				padding: '40px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
			className={style.modalWindow}
			footer={null}
			closable={false}
			visible={visible}
		>
			<p className={style.modalText}>{children}</p>
			<div className={style.containerToModalButtons}>
				<Button type='default' className={style.submit_modal} onClick={() => handleOk()}>
					Да
				</Button>
				<Button type='primary' className={style.cancel_modal} onClick={handleCancel}>
					Нет
				</Button>
			</div>
		</Modal>
	);
};

export default ModalWindow;
