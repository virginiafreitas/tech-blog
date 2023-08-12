const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await User.bulkCreate(postData)
  
  const comments = await User.bulkCreate(commentData)


  process.exit(0);
};

seedDatabase();
