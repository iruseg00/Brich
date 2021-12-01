import express from "express";
import { Blob } from "node:buffer";

import PostService from "../services/PostService.mjs";
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const data = await PostService.getAll(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const data = await PostService.create(req.user.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/download", async (req, res) => {
  try {
    const data = await PostService.getAll(req.user.id);
    res.status(200).json(data);
    await PostService.deleteAll(req.user.id);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/upload", async (req, res) => {
  try {
    const data = await PostService.upload(req.params.id);
    console.log("upload data:", data);
    res.status(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
