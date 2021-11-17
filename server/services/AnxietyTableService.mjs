import AnxietyTable from "../db/models/AnxietyTable.mjs";

class AnxietyTableService {
  get(questionID) {
    return AnxietyTable.findOne({
      where: { questionID },
    });
  }

  getAll() {
    return AnxietyTable.findAll({ attributes: ["questionID", "question"] });
  }

  create(question) {
    return AnxietyTable.findOrCreate({
      where: {
        question,
      },
      defaults: {
        question,
      },
    });
  }

  delete(questionID) {
    return AnxietyTable.destroy({
      where: { questionID },
    });
  }
}

export default new AnxietyTableService();
