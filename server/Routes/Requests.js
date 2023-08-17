const express = require("express");
const router = express.Router();
const { Requests } = require("../models");

router.get("/", async (req, res) => {
  const listOfRequests = await Requests.findAll();
  res.json(listOfRequests);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const request = await Requests.findByPk(id);
  res.json(request);
});

router.post("/", async (req, res) => {
  const request = req.body;
  await Requests.create(request);
  res.send(request);
});


module.exports = router;