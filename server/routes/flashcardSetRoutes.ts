import express from 'express';
const router = express.Router();
const {getCommonFlashcardSets, getCommonFlashcardSet, createCustomFlashcardSet, deleteCustomFlashcardSet} = require('../controllers/flashcardSetController');
const {isAuthenticated} = require('../middleware/authMiddleware');

router.route('/').get(isAuthenticated, getCommonFlashcardSets);
router.route('/:id').get(isAuthenticated, getCommonFlashcardSet);
router.route('/create').post(isAuthenticated, createCustomFlashcardSet);
router.route('/delete').post(isAuthenticated, deleteCustomFlashcardSet);

module.exports = router;