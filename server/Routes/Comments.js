const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.get("/:complainId", async (req, res) => {
  const complainId = req.params.complainId;
  const comments = await Comments.findAll({ where: { ComplainId: complainId } });
  res.json(comments);
});

router.get("/", async (req, res) => {
  const listOfComments = await Comments.findAll();
  res.json(listOfComments);
});

router.post("/", async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

router.delete("/:commentId",async (req, res) => {
  const commentId = req.params.commentId;
  await Comments.destroy({
    where: {
      id: commentId,
    },
  });
  res.json("DELETED SUCCESSFULLY");
});

module.exports = router;