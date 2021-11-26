import Sequelize from "sequelize";
import Posts from "../db/models/Posts.mjs";
const Op = Sequelize.Op;

class PostService {
  getAll(id) {
    return Posts.findAll({
      where: { userId: { [Op.eq]: id } },
      attributes: ["postId", "title", "text"],
    });
  }

  create(userId, body) {
    return Posts.findOrCreate({
      where: {
        title: body.title,
      },
      defaults: {
        userId: userId,
        title: body.title,
        text: body.text,
      },
    });
  }

  deleteAll(userId) {
    return Posts.destroy({
      where: { userId },
    });
  }

  getMe(id) {
    return Users.findOne({
      attributes: [
        "userID",
        "surname",
        "name",
        "middleName",
        "role",
        "sex",
        "email",
        "photo",
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

export default new PostService();
