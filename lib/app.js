const express = require("express");
const app = express();
const routerApi = require("./routes/");
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "FizzBuzz Api welcome!" });
});

routerApi(app);

module.exports = app;
