const Feed = require("../models/Feed");





const getFeed = async (req, res) => {
    const posts = await Feed.find().sort({ createdAt: -1 });
    res.render("feed", { posts });
};






const addPost = async (req, res) => {

    const { name, message } = req.body;

    if (!name || !message) {
        return res.send("Fields cannot be empty");
    }

    await Feed.create({
        name,
        message
    });

    res.redirect("/feed");
};





const getSinglePost = async (req, res) => {

    const post = await Feed.findById(req.params.id);

    res.render("single", { post });
};




const editPage = async (req, res) => {

    const post = await Feed.findById(req.params.id);

    res.render("edit", { post });
};




const updatePost = async (req, res) => {

    await Feed.findByIdAndUpdate(req.params.id, req.body);

    res.redirect(`/feed/${req.params.id}`);
};




const deletePost = async (req, res) => {

    await Feed.findByIdAndDelete(req.params.id);

    res.redirect("/feed");
};





module.exports = {
    getFeed,
    addPost,
    getSinglePost,
    editPage,
    updatePost,
    deletePost
};