const express = require("express");
const router = express.Router();
const { ReqOwn } = require("../models");

router.get("/:reqId", async (req, res) => {
  const reqId = req.params.reqId;
  const reqOwns = await ReqOwn.findAll({ where: { ReqId: reqId } });
  res.json(reqOwns);
});

router.get("/", async (req, res) => {
  const listOfReqOwn = await ReqOwn.findAll();
  res.json(listOfReqOwn);
});

router.post("/", async (req, res) => {
  const reqOwn = req.body;
  await ReqOwn.create(reqOwn);
  res.json(reqOwn);
});

router.delete("/:reqOwnId",async (req, res) => {
  const reqOwnId = req.params.reqOwnId;
  await ReqOwn.destroy({
    where: {
      id: reqOwnId,
    },
  });
  res.json("DELETED SUCCESSFULLY");
});

module.exports = router;