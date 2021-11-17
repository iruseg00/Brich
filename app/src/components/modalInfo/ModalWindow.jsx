import React from 'react';
import { Button, Modal } from 'antd';
import style from './style.module.scss';

const ModalWindow = ({ children, visible = false, setVisible = ()=> {} }) => {
	const handleOk = () => {
		setVisible(false);
	};
	return (
		<Modal
			centered
			bodyStyle={{
				border: '1px solid black',
				borderRadius: '10px',
				backgroundColor: '#e6e6e6',
				width: '527px',
				padding: '40px',
			}}
			className={style.modalWindow}
			footer={null}
			closable={false}
			visible={visible}
		>
			<p className={style.modalText}>{children}</p>
			<div className={style.containerToModalButtons}>
				<Button type='default' className={style.submit_modal} onClick={handleOk}>
					ОК
				</Button>
			</div>
		</Modal>
	);
};

export default ModalWindow;
