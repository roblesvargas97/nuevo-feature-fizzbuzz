const express = require("express");
const router = express.Router();
const ExplorerController = require("../controllers/ExplorerController");

router.use("/:score" , (req , res) => {
    try {
        const {score} = req.params;
        const trick = ExplorerController.getNumberFizzBuzz(score);
        res.status(200).json({score: score , trick : trick});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;