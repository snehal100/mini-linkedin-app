// routes/posts.js
const express = require('express');
const router = express.Router();
const { Post, User } = require('../models'); // Sequelize Models
const auth = require('../middleware/auth'); // Our authorization middleware

// @route   POST api/posts
// @desc    Create a new post
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const newPost = await Post.create({
      text: req.body.text,
      UserId: user.id, // Sequelize uses 'UserId' as the foreign key
      authorName: user.name, // Storing the name to avoid extra queries on the feed
    });

    res.json(newPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts
// @desc    Get all posts for the public feed
// @access  Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['timestamp', 'DESC']], // Order by creation time
      include: {
        model: User,
        attributes: ['name'], // Only include the user's name
      },
    });

    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts/user/:userId
// @desc    Get all posts for a specific user's profile
// @access  Public
router.get('/user/:userId', async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        UserId: req.params.userId,
      },
      order: [['timestamp', 'DESC']],
      include: {
        model: User,
        attributes: ['name', 'bio'], // Include name and bio for the profile
      },
    });

    if (!posts) {
      return res.status(404).json({ msg: 'No posts found for this user' });
    }

    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;