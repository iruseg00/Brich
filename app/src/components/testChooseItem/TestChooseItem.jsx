import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

class TestChooseItem extends React.Component {
	render() {
		return (
			<div className={style.container}>
				<div className={style.left}>
					<Link
						className={style.abbreviation}
						to={`/dashboard/${this.props.abbreviation.toLowerCase()}`}
					>
						{this.props.abbreviation}
					</Link>
					<div className={style.decryption}>{this.props.decryption}</div>
				</div>
				<div className={style.description}>{this.props.description}</div>
			</div>
		);
	}
}

export default TestChooseItem;
