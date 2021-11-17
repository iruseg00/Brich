import DcTest from "../db/models/DcTest.mjs";

class DcTestService {
  async getAll(id) {
    try {
      let testingSystems = await DcTest.findAll({
        attributes: ["testingSystem"],
        where: { user: id },
      });
      testingSystems = [
        ...new Set(testingSystems.map((item) => item.testingSystem)),
      ];
      const sortedResults = testingSystems.map((system) => {
        return DcTest.findAndCountAll({
          attributes: [
            "results",
            "testingSystem",
            "description",
            "createdAt",
            "ID",
          ],
          where: { user: id, testingSystem: system },
        });
      });

      return Promise.all(sortedResults);
    } catch (error) {
      return error;
    }
  }

  getAllByTestingSystem(testingSystem) {
    return DcTest.findAll({
      attributes: [
        "results",
        "testingSystem",
        "description",
        "createdAt",
        "ID",
      ],
      where: { testingSystem },
    });
  }

  create(body) {
    return DcTest.create({
      user: body.user,
      answers: body.answers,
      results: body.results,
      testingSystem: body.testingSystem,
      description: body.description,
    });
  }
}

export default new DcTestService();
