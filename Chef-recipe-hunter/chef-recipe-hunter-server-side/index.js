const express = require('express');
const app = express();
var cors = require("cors");
const port = process.env.port || 5000;
const chefList = require("./data/food.json");
app.use(cors())
app.get("/", (req, res) => {
    res.send("Website server is running");
})
app.get("/chef", (req, res) => {
    res.send(chefList);
})
app.get("/chef/:id", (req, res) => {
    const chefId = req.params.id;
    const chefSpec = chefList.find(chef => chef.id === chefId);
    res.send(chefSpec);
})
app.listen(port, () => {
    console.log("web Api is running")
})