const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// one user can make many posts
User.hasMany(Post, {
  foreignKey: "post_id",
  onDelete: 'CASCADE'
});

// one post has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

// one user has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// posts are linked to users
Post.belongsTo(User, {
    foreignKey: "user_id",
});

// comments are linked to users
Comment.belongsTo(User, {
    foreignKey: "user_id",
});

// comments are linked to posts
Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
