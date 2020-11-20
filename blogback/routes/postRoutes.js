const router = require("express").Router();
 
 
const Post = require("../models/posts")
router.post("/", async (req, res) => {
  //retrive data from request
  const {
    imageUrl,
    title,
    createdAt,
    category,
    likeCount,
    dislikeCount,
    favoriteCount,
    comments,
  } = req.body;

  //construct post model

  const newPost = new Post({
    imageUrl,
    title,
    createdAt,
    category,
    likeCount,
    dislikeCount,
    favoriteCount,
    comments,
  });
  try {
    const SavedPost = await newPost.save();
    res.json(SavedPost);
  } catch (err) {
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});
router.get("/category/:category", async (req, res) => {
   
    const categoryposts = await Post.find({ category: req.params.category });
    console.log(categoryposts);
      res.json({categoryposts:categoryposts});
});
module.exports = router;
