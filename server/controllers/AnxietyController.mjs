import express from "express";
const router = express.Router();

import AnxietyTableService from "../services/AnxietyTableService.mjs";
import AnxietyTestService from "../services/AnxietyTestService.mjs";
import { AnxietyTest } from "../services/ComputationService.mjs";

router.get("/all_questions", async (req, res) => {
  try {
    const data = await AnxietyTableService.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/all_answers", async (req, res) => {
  try {
    const data = await AnxietyTestService.getAll(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/testing_system", async (req, res) => {
  try {
    const data = await AnxietyTestService.getAllByTestingSystem(
      req.body.testingSystem
    );
    return res.status(200).json(data.reverse());
  } catch (error) {
    res.status(400).send("Invalid data!");
  }
});

router.post("/create_answer", async (req, res) => {
  try {
    req.body.results = await AnxietyTest(req.body.answers);
    req.body.user = req.user.id;
    const data = await AnxietyTestService.create(req.body);
    res.status(201).json(data.results);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
