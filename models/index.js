// models/index.js
const path = require('path');
const sequelize = require(path.join(__dirname, '..', 'config', 'database'));

const User = require('./User');
const Post = require('./Post'); // Corrected: File name should be 'Post.js'

// Define associations (if not already defined in the model files)
User.hasMany(Post);
Post.belongsTo(User);


// This will sync the models with the database, creating tables if they don't exist.
// Use `force: true` to drop tables on every sync (useful for development).
// For production, you would use migrations.
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

module.exports = { User, Post, sequelize };