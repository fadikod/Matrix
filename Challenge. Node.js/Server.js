const express = require("express");
const app = express();

const mongoose = require("mongoose");
const feedRoutes = require("./routes/feedRoutes.js");

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/facebookFeed")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/feed", feedRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});