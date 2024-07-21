import asyncHandler from 'express-async-handler';
import {Request, Response} from 'express';
const User = require('../models/user');

exports.getUser = asyncHandler(async(req: Request, res: Response) => {
    const user = req.user;
    res.status(200).json(user);  
    return;
});

exports.addUserInterests = asyncHandler(async(req: Request, res: Response) => {
    const {interests} = req.body;

    if (req.user && interests) {
        const user = await User.findById(req.user._id);
        user.interests = interests;
        await user.save();
        res.status(200).json(user);
    } 
    
    return;
});

exports.handleUserFavoriteFlashcard = asyncHandler(async(req: Request, res: Response) => {
    const {english, ukrainian} = req.body;
    if (req.user) {
        const user = await User.findById(req.user._id);

        if (english && ukrainian) {
            const isFavorite = user.favoriteFlashcards.find((flashcard: {english: string, ukrainian: string}) => flashcard.english === english);

            if (isFavorite) {
                const filteredFlashcards = user.favoriteFlashcards.filter((favoriteFlashcard: {_id: string, english: string, ukrainian: string}) => favoriteFlashcard.english !== english && favoriteFlashcard.ukrainian !== ukrainian);
    
                user.favoriteFlashcards = filteredFlashcards;
                await user.save();
                res.status(200).json({msg: 'Removed from the favorites.'});
                
            } else {
                user.favoriteFlashcards = [...user.favoriteFlashcards, {english, ukrainian}];
                await user.save();
                res.status(200).json({msg: 'Added to the favorites.'});
                
            }
        } else {
            res.status(422).json({msg: 'Necessary values were not provided.'});
        }
    }
    return;
});

exports.getUserFavoriteFlashcards = asyncHandler(async(req: Request, res: Response) => {
   if (req.user) {
        const user = await User.findById(req.user._id);
        res.status(200).json(user.favoriteFlashcards);
    }    

   return;
});


exports.getUserCustomFlashcardSets = asyncHandler(async(req: Request, res: Response) => {
   if (req.user){
        const user = await User.findById(req.user._id);
        res.status(200).json(user.customFlashcardSets);
   }
    
    return;
});


exports.addExerciseSetToCompleted = asyncHandler(async(req: Request, res: Response) => {
    if (req.user) {
        const {exerciseId} = req.body;
        const user = await User.findById(req.user._id);
        
        const alreadyCompletedExercise = user.completedExerciseSets.find((element: string) => element.toString() === exerciseId)
        
        if (alreadyCompletedExercise) {
            res.status(200).json({msg: 'Exercise has already been completed.'});
        } else {
            user.completedExerciseSets = [...user.completedExerciseSets, exerciseId];
            await user.save();
            res.status(200).json({msg: 'Exercise has been added to the completed ones.'});   
        }
    }
    
    return;
});
