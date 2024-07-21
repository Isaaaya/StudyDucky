const express = require('express');
const router = express.Router();
const {getPosts, getPost} = require('../controllers/postController');
const {isAuthenticated} = require('../middleware/authMiddleware');

router.route('/').get(isAuthenticated, getPosts);
router.route('/:id').get(isAuthenticated, getPost);

module.exports = router;