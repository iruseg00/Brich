import Sequelize from 'sequelize';
import sequelizeConnect from '../config/connect.mjs';
const { UUID, UUIDV4, TEXT, JSON, INTEGER } = Sequelize;

const MdtTest = sequelizeConnect.define(
    'MdtTest',
    {
        id: {
            type: UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        ID: {
            type: INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        user: {
            type: UUID,
            allowNull: false,
        },
        answers: {
            type: JSON,
            defaultValue: [],
            allowNull: false,
        },
        results: {
            type: JSON,
            allowNull: false,
        },
        testingSystem: {
            type: TEXT,
            allowNull: false,
        },
        description: {
            type: TEXT,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

MdtTest.sync({ force: false });

export default MdtTest;
