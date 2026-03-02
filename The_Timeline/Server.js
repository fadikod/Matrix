const express = require("express");
const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

require("./config/db");

const routes = require("./Config/routes");
const apiRoutes= require("./Config/apiRoutes")

app.use("/public", express.static("public"));

app.set("view engine", "ejs");

app.use(routes);
app.use("/api", apiRoutes);

app.listen(3000, () => { console.log('server working on 3000') });