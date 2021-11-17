import AnxietyTest from "../db/models/AnxietyTest.mjs";

class AnxietyTestService {
  async getAll(id) {
    try {
      let testingSystems = await AnxietyTest.findAll({
        attributes: ["testingSystem"],
        where: { user: id },
      });
      testingSystems = [
        ...new Set(testingSystems.map((item) => item.testingSystem)),
      ];
      const sortedResults = testingSystems.map((system) => {
        return AnxietyTest.findAndCountAll({
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
    return AnxietyTest.findAll({
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
    return AnxietyTest.create({
      user: body.user,
      answers: body.answers,
      results: body.results,
      testingSystem: body.testingSystem,
      description: body.description,
    });
  }
}

export default new AnxietyTestService();
