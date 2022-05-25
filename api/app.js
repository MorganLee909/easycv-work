const express = require("express");
const compression = require("compression");

let app = express();

app.use(compression());

app.use(express.static(`${__dirname}/views`));
app.get("/", (req, res)=>{res.sendFile(`${__dirname}/views/index.html`)});
app.get("/api", (req, res)=>{res.send("Pepe poney boy")});

app.listen(process.env.PORT);