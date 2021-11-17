import Sequelize from "sequelize";
import sequelizeConnect from "../config/connect.mjs";
const { UUID, UUIDV4, TEXT, INTEGER } = Sequelize;

const AcTable = sequelizeConnect.define(
  "AcTable",
  {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    questionID: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    question: {
      type: TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

AcTable.sync({ force: false });

export default AcTable;
