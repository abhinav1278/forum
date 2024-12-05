const express = require('express');
const { getPostsByCategory, addPost , getPostById ,updateLikes } = require('../controllers/postController');
const validatePostData = require('../middlewares/validatePost');
const router = express.Router();

// Route to fetch all posts by category with optional sorting
router.get('/:category', getPostsByCategory);

// Route to fetch all posts by category with optional sorting
router.get('/id/:id', getPostById);

// Route to add a new post (with validation middleware)
router.post('/', validatePostData, addPost);  // Using validatePostData middleware to validate before adding a post

// Route to update likes
router.put('/:id/likes', updateLikes);


module.exports = router;

