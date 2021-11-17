import MdtTable from '../db/models/MdtTable.mjs';

class MdtTableService {
	get(adjectiveID) {
		return MdtTable.findOne({
			where: { adjectiveID },
		});
	}

	getAll(where) {
		return MdtTable.findAll(where);
	}

	create(adjective, mark) {
		return MdtTable.findOrCreate({
			where: {
				adjective,
			},
			defaults: {
				adjective,
				mark,
			},
		});
	}

	delete(adjectiveID) {
		return MdtTable.destroy({
			where: { adjectiveID },
		});
	}
}

export default new MdtTableService();
