const express = require('express');
const router = express.Router();
const {signIn, signUp, signOut} = require('../controllers/authController');
const {isAuthenticated} = require('../middleware/authMiddleware');
// const validateMiddleware = require('../middleware/validateMiddleware');
// const {validate} = require('../models/user');

router.post('/sign-in', signIn);
router.post('/sign-up', signUp);
router.route('/sign-out').post(isAuthenticated, signOut);

module.exports = router;