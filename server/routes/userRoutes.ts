import express from 'express';
const {addUserInterests, handleUserFavoriteFlashcard, getUserFavoriteFlashcards, getUserCustomFlashcardSets, getUser, addExerciseSetToCompleted} = require('../controllers/userController');
const {isAuthenticated} = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/get-user').get(isAuthenticated, getUser);
router.route('/get-favorite-flashcards').get(isAuthenticated, getUserFavoriteFlashcards);
router.route('/get-custom-flashcard-sets').get(isAuthenticated, getUserCustomFlashcardSets);
router.route('/edit').post(isAuthenticated, addUserInterests);
router.route('/handle-favorite-flashcard').post(isAuthenticated, handleUserFavoriteFlashcard);
router.route('/add-exercise-to-completed').post(isAuthenticated, addExerciseSetToCompleted);

module.exports = router;