const express = require("express");
const router = express.Router();

router.use("/:mission" , (req , res) => {
    const {mission} = req.params;
    res.write(mission);
});