import SusTest from '../db/models/SusTest.mjs';

class SusTestService {
	async getAll(id) {
		try {
			let testingSystems = await SusTest.findAll({
				attributes: ['testingSystem'],
				where: { user: id },
			});
			testingSystems = [... new Set(testingSystems.map(item => item.testingSystem))];
			const sortedResults = testingSystems.map((system)=> {
				return SusTest.findAndCountAll({
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
		return SusTest.findAll({
			attributes: ['results', 'testingSystem', 'description', 'createdAt', 'ID'],
			where: { testingSystem },
		});
	}

	create(body) {
		return SusTest.create({
			user: body.user,
			answers: body.answers,
			results: body.results,
			testingSystem: body.testingSystem,
			description: body.description,
		});
	}
}

export default new SusTestService();
