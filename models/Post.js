// models/Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Import the User model

const Post = sequelize.define('Post', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  text: { type: DataTypes.STRING, allowNull: false },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  // Sequelize automatically creates a 'UserId' foreign key
});

// Define the association
Post.belongsTo(User);
User.hasMany(Post);

module.exports = Post;