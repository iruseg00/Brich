import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { Blob } from "node:buffer";

import PostService from "../services/PostService.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "posts.json");
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
    const blob = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });
    res.status(200).json(blob);
    await PostService.deleteAll(req.user.id);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/upload", async (req, res) => {
  try {
    const data = await PostService.upload(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
