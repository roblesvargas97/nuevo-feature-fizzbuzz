const express = require("express");

function routerApi(app) {
    const router = express.Router();
    app.use("/v1", router);
}

module.exports = routerApi;
