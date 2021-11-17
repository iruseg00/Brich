import MdtTest from '../db/models/MdtTest.mjs';

class MdtTestService {
	async getAll(id) {
		try {
			let testingSystems = await MdtTest.findAll({
				attributes: ['testingSystem'],
				where: { user: id },
			});
			testingSystems = [... new Set(testingSystems.map(item => item.testingSystem))];
			const sortedResults = testingSystems.map((system)=> {
				return MdtTest.findAndCountAll({
					attributes: ['results', 'testingSystem', 'description', 'createdAt', 'ID'],
					where: { user: id, testingSystem: system },
				});
			})
			return Promise.all(sortedResults);
		} catch (error) {
			return error;
		}
	}

	getAllByTestingSystem(testingSystem)
	{
		return MdtTest.findAll({
			attributes: ['results', 'testingSystem', 'description', 'createdAt', 'ID'],
			where: { testingSystem },
		});
	}

	create(body) {
		return MdtTest.create({
			user: body.user,
			answers: body.answers,
			results: body.results,
			testingSystem: body.testingSystem,
			description: body.description,
		});
	}
}

export default new MdtTestService();
