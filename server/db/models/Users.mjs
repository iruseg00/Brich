import Sequelize from 'sequelize';
import sequelizeConnect from '../config/connect.mjs';
import bcrypt from 'bcrypt';
const { UUID, UUIDV4, STRING, TEXT, JSON, INTEGER } = Sequelize;

const Users = sequelizeConnect.define(
	'Users',
	{
		id: {
			type: UUID,
			primaryKey: true,
			defaultValue: UUIDV4,
		},
		userID: {
			type: INTEGER,
			autoIncrement: true,
			allowNull: false,
		},
		surname: {
			type: STRING,
			allowNull: false,
		},
		name: {
			type: STRING,
			allowNull: false,
		},
		middleName: {
			type: STRING,
			allowNull: true,
		},
		sex: {
			type: STRING,
			allowNull: false,
		},
		email: {
			type: STRING,
			allowNull: false,
		},
		role: {
			type: TEXT,
			defaultValue: 'user',
			allowNull: false,
		},
		tokens: {
			type: JSON,
			defaultValue: [],
			allowNull: false,
		},
		password: {
			type: STRING,
			allowNull: false,
		},
		photo: {
			type: TEXT,
			allowNull: true,
		},
	},
	{
		timestamps: true,
		hooks: {
			beforeCreate: async (user) => {
				const salt = await bcrypt.genSaltSync(10);
				user.password = await bcrypt.hashSync(user.password, salt);
			},
		},
	}
);

Users.prototype.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};
Users.sync({ force: false });

export default Users;
