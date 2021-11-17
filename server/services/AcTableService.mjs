import AcTable from "../db/models/AcTable.mjs";

class AcTableService {
  get(questionID) {
    return AcTable.findOne({
      where: { questionID },
    });
  }

  getAll() {
    return AcTable.findAll({ attributes: ["questionID", "question"] });
  }

  create(question) {
    return AcTable.findOrCreate({
      where: {
        question,
      },
      defaults: {
        question,
      },
    });
  }

  delete(questionID) {
    return AcTable.destroy({
      where: { questionID },
    });
  }
}

export default new AcTableService();
