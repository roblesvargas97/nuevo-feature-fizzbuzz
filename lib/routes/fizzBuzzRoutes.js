const express = require("express");
const router = express.Router();

router.use("/:score" , (req , res) => {
    const {score} = req.params;
    res.status.json({score: score});
});

module.exports = router;