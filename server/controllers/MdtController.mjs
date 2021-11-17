import express from 'express';
const router = express.Router();

import MdtTableService from '../services/MdtTableService.mjs';
import MdtTestService from '../services/MdtTestService.mjs';
import { MdtTest } from '../services/ComputationService.mjs';

router.get('/all_questions', async (req, res) => {
	try {
		const data = await MdtTableService.getAll({ attributes: ['adjectiveID', 'adjective'] });
		res.status(200).json(data);
	}
	catch (error) {
		res.status(500).send(error);
	}
});

router.get('/all_answers', async (req, res) => {
	try {
		const data = await MdtTestService.getAll(req.user.id);
		return res.status(200).json(data);
	}
	catch (error) {
		res.status(400).send(error);
	}
});

router.post('/testing_system', async (req, res) => {
	try {
		const data = await MdtTestService.getAllByTestingSystem(req.body.testingSystem);
		return res.status(200).json(data.reverse());
	}
	catch (error) {
		res.status(400).send('Invalid data!');
	}
});

router.post('/create_answer', async (req, res) => {
	try {
		const results = await MdtTableService.getAll({
			where: {
				adjectiveID: req.body.answers,
			},
			attributes: ['adjective', 'mark'],
		});
		req.body.answers = [...results.map((item) => item.adjective)];
		const { plus, minus } = await MdtTest(results);
		req.body.results = { plus, minus };
		req.body.user = req.user.id;
		let data = await MdtTestService.create(req.body);
		res.status(201).json(data.results);
	} catch (error) {
		res.status(400).send('Invalid data!');
	}
});

export default router;
