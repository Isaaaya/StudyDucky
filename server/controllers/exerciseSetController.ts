import asyncHandler from 'express-async-handler';
import {Request, Response} from 'express';
const ExerciseSet = require('../models/exerciseSet');

exports.getExerciseSets = asyncHandler(async(req: Request, res: Response) => {
  const exerciseSets = await ExerciseSet.find();
  if (exerciseSets) {
    res.status(200).json(exerciseSets);  
  } else {
    res.status(404).json({msg: 'No exercise sets were found.'}); 
  }
   
   return;
});

exports.getExerciseSet = asyncHandler(async(req: Request, res: Response) => {
    const {id} = req.params;
    const exerciseSet = await ExerciseSet.findById(id);
    if (exerciseSet) {
        res.status(200).json(exerciseSet);  
    } else {
        res.status(404).json({msg: 'No exercise set was found.'}); 
    }
    return;
});
