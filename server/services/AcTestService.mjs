import AcTest from "../db/models/AcTest.mjs";

class AcTestService {
  async getAll(id) {
    try {
      let testingSystems = await AcTest.findAll({
        attributes: ["testingSystem"],
        where: { user: id },
      });
      testingSystems = [
        ...new Set(testingSystems.map((item) => item.testingSystem)),
      ];
      const sortedResults = testingSystems.map((system) => {
        return AcTest.findAndCountAll({
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
    return AcTest.findAll({
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
    return AcTest.create({
      user: body.user,
      answers: body.answers,
      results: body.results,
      testingSystem: body.testingSystem,
      description: body.description,
    });
  }
}

export default new AcTestService();
