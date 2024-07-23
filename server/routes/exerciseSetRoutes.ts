const express = require('express');
const router = express.Router();
const {getExerciseSets, getExerciseSet} = require('../controllers/exerciseSetController');
const {isAuthenticated} = require('../middleware/authMiddleware');

router.route('/').get(getExerciseSets);
router.route('/:id').get(isAuthenticated, getExerciseSet);

module.exports = router;