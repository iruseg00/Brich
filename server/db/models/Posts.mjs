import Sequelize from "sequelize";
import sequelizeConnect from "../config/connect.mjs";
const { UUID, UUIDV4, STRING, TEXT, JSON, INTEGER } = Sequelize;

const Posts = sequelizeConnect.define("Posts", {
  postId: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  userId: {
    type: UUID,
    allowNull: false,
  },
  title: {
    type: TEXT,
    allowNull: false,
  },
  text: {
    type: TEXT,
    allowNull: false,
  },
});

Posts.sync({ force: false });

export default Posts;
