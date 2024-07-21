import asyncHandler from 'express-async-handler';
import {Request, Response} from 'express';
const FlashcardSet = require('../models/flashcardSet');
const User = require('../models/user');
const IFlashcardSet = require('../interfaces/flashcardSet.interface');
const mongoose = require('mongoose');

exports.getCommonFlashcardSets = asyncHandler(async(req: Request, res: Response) => {
    const commonFlashcardSets = await FlashcardSet.find();
    res.status(200).json(commonFlashcardSets);
    return;
});

exports.getCommonFlashcardSet = asyncHandler(async(req: Request, res: Response) => {
    const {id} = req.params;
    const flashcardSet = await FlashcardSet.findById(id);
    if (flashcardSet) {
        res.status(200).json(flashcardSet);
    } else {
        res.status(404).json({msg: 'No flashcard set was found.'}); 
    }
    return;
});

exports.createCustomFlashcardSet = asyncHandler(async(req: Request, res: Response) => {
    if (req.user) {
        const { title, words } = req.body;
        if (title && words.length > 0) {
            const user = await User.findById(req.user._id);
            user.customFlashcardSets = [...user.customFlashcardSets, {title, words}];
            await user.save();
            res.status(200).json({msg: 'Added'});
        } else {
            res.status(422).json({msg: 'Necessary values were not provided.'}); 
        }
    }
    
    return;
});

exports.deleteCustomFlashcardSet = asyncHandler(async(req: Request, res: Response) => {
    if (req.user) {
        const { customFlashcardSetId } = req.body;
        const user = await User.findById(req.user._id);
       
        user.customFlashcardSets = user.customFlashcardSets.filter((element: typeof IFlashcardSet) => element._id.toString() !== customFlashcardSetId);
        
        await user.save();
        res.status(200).json(user.customFlashcardSets);
    }
   
    return;
});


