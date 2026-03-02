const express = require("express");
const routers = express.Router();
const apiController = require("../Controllers/apiControllers")


routers.get("/posts", apiController.getAllPosts);
routers.post("/posts", apiController.createPost);
routers.delete("/posts/:id", apiController.deletePost);
routers.patch("/posts/:id", apiController.updatePost);
router.post("/posts/:postId/comments", apiController.createComment);
router.get("/posts/:postId/comments", apiController.getComments);


module.exports = routers;
