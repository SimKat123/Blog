const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = require("./users.json");
const postData = require("./post.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
    });
  }
};

seedDatabase();
