import PssuqTest from '../db/models/PssuqTest.mjs';

class PssuqTestService {
	async getAll(id) {
		try {
			let testingSystems = await PssuqTest.findAll({
				attributes: ['testingSystem'],
				where: { user: id },
			});
			testingSystems = [... new Set(testingSystems.map(item => item.testingSystem))];
			const sortedResults = testingSystems.map((system)=> {
				return PssuqTest.findAndCountAll({
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
		return PssuqTest.findAll({
			attributes: ['results', 'testingSystem', 'description', 'createdAt', 'ID'],
			where: { testingSystem },
		});
	}

	create(body) {
		return PssuqTest.create({
			user: body.user,
			answers: body.answers,
			results: body.results,
			testingSystem: body.testingSystem,
			description: body.description,
		});
	}
}

export default new PssuqTestService();