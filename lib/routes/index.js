const express = require("express");
const explorersRoutes = require("./explorersRoutes");
const fizzBuzzRoutes = require("./fizzBuzzRoutes");

function routerApi(app) {
    const router = express.Router();
    app.use("/v1", router);
    router.use("/explorers" , explorersRoutes );
    router.use("/fizzbuzz" , fizzBuzzRoutes);
}

module.exports = routerApi;
