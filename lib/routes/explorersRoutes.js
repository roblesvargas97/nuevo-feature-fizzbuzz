const express = require("express");
const router = express.Router();
const ExplorerController = require("../controllers/ExplorerController");

router.use("/amount/:mission" , (req , res) => {
    const {mission} = req.params;
    const amountExplorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    res.status(200).json({ mission:mission , quantity: amountExplorersInMission});
});

router.use("/usernames/:mission" , (req , res) => {
    try {
        const {mission} = req.params;
        const namesExplorersInMission = ExplorerController.getNamesExplorersByMission(mission);
        res.status(200).json({ mission:mission , explorers: namesExplorersInMission});
    } catch (error) {
        res.status(404).json({error:error.message});
    }
});

router.use("/:mission" , (req , res) => {
    try {
        const {mission} = req.params;
        const explorersInMission = ExplorerController.getExplorerByMission(mission);
        res.status(200).json(explorersInMission);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
});


module.exports = router;