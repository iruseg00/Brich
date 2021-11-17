import express from 'express';
const router = express.Router();

import UserService from '../services/UserService.mjs';

router.get('/me', async (req, res) => {
	try {
		const data = await UserService.getMe(req.user.id);
		res.status(200).json(data);
	} 
	catch (error) {
		res.status(500).send(error);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const data = await UserService.get(req.params.id);
		res.status(200).json(data);
	} 
	catch (error) {
		res.status(500).send(error);
	}
});

router.post('/', async (req, res) => {
	try {
		const data = await UserService.create(req.body);
		res.status(200).json(data);
	} 
	catch (error) {
		res.status(500).send(error);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const data = await UserService.update(req.body, req.params.id);
		data[0] === 1 
			? res.status(200).json({ message: 'Updated successfully' })
			: res.status(404).json({ message: 'record not found' });
	} 
	catch (error) {
		res.status(500).send(error);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const deletedRecordCount = await UserService.delete(req.params.id);
		deletedRecordCount === 1
			? res.status(200).json({ message: 'Deleted successfully' })
			: res.status(404).json({ message: 'record not found' });
	} 
	catch (error) {
		res.status(500).send(error);
	}
});

export default router;
