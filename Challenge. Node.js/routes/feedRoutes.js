const express = require("express");
const router = express.Router();

const feedController = require("../controller/feedControllers");

router.get("/", feedController.getFeed);

router.post("/add", feedController.addPost);

router.get("/:id", feedController.getSinglePost);

router.get("/edit/:id", feedController.editPage);

router.post("/update/:id", feedController.updatePost);

router.post("/delete/:id", feedController.deletePost);

module.exports = router;