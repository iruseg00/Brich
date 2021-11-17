import express from "express";
const router = express.Router();

import PssuqTableService from "../services/PssuqTableService.mjs";
import PssuqTestService from "../services/PssuqTestService.mjs";
import { PssuqTest } from "../services/ComputationService.mjs";

router.get("/all_questions", async (req, res) => {
  try {
    const data = await PssuqTableService.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/all_answers", async (req, res) => {
  try {
    const data = await PssuqTestService.getAll(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/testing_system", async (req, res) => {
  try {
    const data = await PssuqTestService.getAllByTestingSystem(
      req.body.testingSystem
    );
    res.status(200).json(data.reverse());
  } catch (error) {
    res.status(400).send("Invalid data!");
  }
});

router.post("/create_answer", async (req, res) => {
  try {
    req.body.results = await PssuqTest(req.body.answers);
    req.body.user = req.user.id;
    const data = await PssuqTestService.create(req.body);
    res.status(201).json(data.results);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
