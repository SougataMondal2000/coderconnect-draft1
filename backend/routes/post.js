const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/posts", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newPost = new Post({
      title,
      description,
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
