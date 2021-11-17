import express from "express";
const router = express.Router();

import DcTableService from "../services/DcTableService.mjs";
import DcTestService from "../services/DcTestService.mjs";
import { DcTest } from "../services/ComputationService.mjs";

router.get("/all_questions", async (req, res) => {
  try {
    const data = await DcTableService.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/all_answers", async (req, res) => {
  try {
    const data = await DcTestService.getAll(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/testing_system", async (req, res) => {
  try {
    const data = await DcTestService.getAllByTestingSystem(
      req.body.testingSystem
    );
    return res.status(200).json(data.reverse());
  } catch (error) {
    res.status(400).send("Invalid data!");
  }
});

router.post("/create_answer", async (req, res) => {
  try {
    req.body.results = await DcTest(req.body.answers, req.body.sex);
    req.body.user = req.user.id;
    const data = await DcTestService.create(req.body);
    res.status(201).json(data.results);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
