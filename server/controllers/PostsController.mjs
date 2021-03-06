import express from "express";
import PostService from "../services/PostService.mjs";
import UserService from "../services/UserService.mjs";
import fs from "fs";

const router = express.Router();

import formidable from "formidable";
const form = formidable({ multiples: true });

router.get("/all", async (req, res) => {
  try {
    const data = await PostService.getAll(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/get_all", async (req, res) => {
  try {
    const Users = await UserService.getAll();
    const UsersAndPosts = [];

    Users.forEach(async (user, i) => {
      const posts = await PostService.getAll(user.id);
      UsersAndPosts.push({ user, posts });
      if (i + 1 == Users.length) res.status(200).json(UsersAndPosts);
    });
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

router.post("/loadingAll", async (req, res) => {
  try {
    const data = await PostService.getAllPosts();
    res.status(200).json(data);
    await PostService.deleteAllPosts();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/upload", async (req, res) => {
  try {
    form.parse(req, (err, fields, files) => {
      if (err) {
        throw new Error(err);
      }

      fs.readFile(files.file.filepath, async (err, data) => {
        let buff = new Buffer.from(data, "base64");
        let posts = buff.toString("ascii");
        posts = JSON.parse(posts);
        posts.forEach(
          async (post) => await PostService.create(req.user.id, post)
        );

        const Posts = await PostService.getAll(req.user.id);
        res.status(200).json(Posts);
      });
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/upload_all", async (req, res) => {
  try {
    form.parse(req, (err, fields, files) => {
      if (err) {
        throw new Error(err);
      }

      fs.readFile(files.file.filepath, async (err, data) => {
        let buff = new Buffer.from(data, "base64");
        let posts = buff.toString("ascii");
        posts = JSON.parse(posts);
        posts.forEach(
          async (post) => await PostService.create(req.user.id, post)
        );

        const Posts = await PostService.getAll(req.user.id);
        res.status(200).json(Posts);
      });
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
