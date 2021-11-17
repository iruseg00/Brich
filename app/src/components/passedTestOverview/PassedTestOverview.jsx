import style from './style.module.scss';

const PassedTestOverview = ({ image, title, subTitle }) => {
	return (
		<div className={style.container}>
			<div className={style.imageContainer}>
				<img className={style.image} src={image} alt='img' />
			</div>
			<div className={style.titles}>
				<span className={style.title}>{title}</span>
				<span className={style.subTitle}>{subTitle}</span>
			</div>
		</div>
	);
};

export default PassedTestOverview;
