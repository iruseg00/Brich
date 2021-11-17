import Sequelize from 'sequelize';
import sequelizeConnect from '../config/connect.mjs';
const { UUID, UUIDV4, TEXT, INTEGER, BOOLEAN } = Sequelize;

const MdtTable = sequelizeConnect.define(
    'MdtTable',
    {
        id: {
            type: UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        adjectiveID: {
            type: INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        adjective: {
            type: TEXT,
            allowNull: false,
        },
        mark: {
            type: BOOLEAN,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

MdtTable.sync({ force: false });

export default MdtTable;
