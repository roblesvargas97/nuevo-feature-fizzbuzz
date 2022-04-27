const express = require("express");
const router = express.Router();
const ExplorerController = require("../controllers/ExplorerController");

router.use("/amount/:mission" , (req , res) => {
    const {mission} = req.params;
    const amountExplorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    res.status(200).json({amount: amountExplorersInMission});
});

router.use("/:mission" , (req , res) => {
    const {mission} = req.params;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    res.status(200).json(explorersInMission);
});


module.exports = router;