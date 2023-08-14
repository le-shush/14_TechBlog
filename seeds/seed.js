const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData);
    console.log('\n----- USERS SEEDED -----\n');
    await Post.bulkCreate(postData);
    console.log('\n----- POSTS SEEDED -----\n');
    await Comment.bulkCreate(commentData);
    console.log('\n----- COMMENTS SEEDED -----\n');

    console.log('\n----- DATABASE SEEDED SUCCESFULLY -----\n');
    process.exit(0);
}

    

seedDatabase();

