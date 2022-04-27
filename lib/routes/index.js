const express = require("express");
const explorersRoutes = require("./explorersRoutes");

function routerApi(app) {
    const router = express.Router();
    app.use("/v1", router);
    router.use("/explorers" , explorersRoutes );
}

module.exports = routerApi;
