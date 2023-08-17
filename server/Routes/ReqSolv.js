const express = require("express");
const router = express.Router();
const { ReqSolv } = require("../models");


router.get("/", async (req, res) => {
    const listOfReqSolv = await ReqSolv.findAll();
    res.json(listOfReqSolv);
  });

  router.post("/", async (req, res) => {
    const reqSolv = req.body;
    const { ReqId } = req.body;

    const found = await ReqSolv.findOne({
      where: { ReqId: ReqId},
    });
    if (!found) {
      await ReqSolv.create(reqSolv,{ReqId: ReqId});
      res.json("Success");
    } else {
      await ReqSolv.destroy({
        where: { ReqId: ReqId},
      });
      res.json("Fail");
    }

    // await ReqSolv.create(reqSolv);
    // res.json(complete);
  });
  
module.exports = router;
