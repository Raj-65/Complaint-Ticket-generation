const express = require("express");
const router = express.Router();
const { Complains,Comments } = require("../models");

router.get("/", async (req, res) => {
  const listOfComplains = await Complains.findAll();
  res.json(listOfComplains);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const complain = await Complains.findByPk(id);
  res.json(complain);
});

router.post("/", async (req, res) => {
  const complain = req.body;
  await Complains.create(complain);
  res.send(complain);
});

// router.get("/owned",async (req, res) => {
//   const listOfOwned = await Complains.findAll({
//     include: [{
//       model: Comments,
//       required: true
//      }]
//   });
//   res.json(listOfOwned);
// });

module.exports = router;