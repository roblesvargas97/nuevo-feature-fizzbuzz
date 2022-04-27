const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
const routerApi = require("./routes/");
app.use(express.json());

app.get("/", (request, response) => {
    response.status(200).json({ message: "FizzBuzz Api welcome!" });
});

routerApi(app);

module.exports = app;
