import Sequelize from 'sequelize';
import Users from '../db/models/Users.mjs';
const Op = Sequelize.Op;

class UserService {
	get(id) {
		return Users.findOne({
			attributes: [
				'id',
				'userID',
				'surname',
				'name',
				'middleName',
				'role',
				'sex',
				'email',
				'photo',
				'tokens',
			],
			where: { id },
		});
	}

	getMe(id) {
		return Users.findOne({
			attributes: [
				'userID',
				'surname',
				'name',
				'middleName',
				'role',
				'sex',
				'email',
				'photo',
			],
			where: { id },
		});
	}

	find(user) {
		return Users.findOne({
			where: {
				[Op.or]: [{ email: user }],
			},
		});
	}

	create(body) {
		return Users.findOrCreate({
			where: {
				email: body.email,
			},
			defaults: {
				surname: body.surname,
				name: body.name,
				middleName: body.middleName,
				sex: body.sex,
				email: body.email,
				password: body.password,
				photo: body.photo,
			},
		});
	}

	update(body, id) {
		return Users.update(body, {
			where: { id },
		});
	}

	setImageBase64(body, id) {
		return Users.update(
			{ photo: body.photo },
			{
				where: { id },
			}
		);
	}

	delete(id) {
		return Users.destroy({
			where: { id },
		});
	}
}

export default new UserService();
