const express = require("express");
const router = express.Router();
const { Completed } = require("../models");


router.get("/", async (req, res) => {
    const listOfCompleted = await Completed.findAll();
    res.json(listOfCompleted);
  });

  router.post("/", async (req, res) => {
    const complete = req.body;
    const { ComplainId } = req.body;

    const found = await Completed.findOne({
      where: { ComplainId: ComplainId},
    });
    if (!found) {
      await Completed.create(complete,{ComplainId: ComplainId});
      res.json("Success");
    } else {
      await Completed.destroy({
        where: { ComplainId: ComplainId},
      });
      res.json("Fail");
    }

    // await Completed.create(complete);
    // res.json(complete);
  });
  
module.exports = router;
