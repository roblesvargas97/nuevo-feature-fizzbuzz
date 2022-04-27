const express = require("express");
const router = express.Router();

router.use("/explorers/:mission" , (req , res) => {
    const {mission} = req.params;
    res.write(mission);
});