const mongoose = require("mongoose");

const newpostSchema = new mongoose.Schema({
    imageUrl: { type:String , required: true },
  title: { type: String, required: true },
    description:{ type: String},
    createdAt: { type: Date, required: true },
    category: { type: String, required: true },
    likeCount: { type: Number, required: false },
    dislikeCount: { type: Number, required: false },
    favoriteCount: { type: Number, required: false },
    comments: { type: [String] },
  });

module.exports = Post = mongoose.model("newpost", newpostSchema);
