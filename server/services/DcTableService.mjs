import DcTable from "../db/models/DcTable.mjs";

class DcTableService {
  get(questionID) {
    return DcTable.findOne({
      where: { questionID },
    });
  }

  getAll() {
    return DcTable.findAll({ attributes: ["questionID", "question"] });
  }

  create(question) {
    return DcTable.findOrCreate({
      where: {
        question,
      },
      defaults: {
        question,
      },
    });
  }

  delete(questionID) {
    return DcTable.destroy({
      where: { questionID },
    });
  }
}

export default new DcTableService();
