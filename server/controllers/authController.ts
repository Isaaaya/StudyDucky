import {Request, Response} from 'express';
import asyncHandler from 'express-async-handler';
const User = require('../models/user');

exports.signUp = asyncHandler(async(req: Request, res: Response) => {
     const {name, email, password, city} = req.body;
     if (name && email && password) {
         const user = await User.findOne({email});
         if (!user?._id) {
               const user = await User.create({name, email, password, city});
               const token = user.generateJWT({res, userId: user?._id});
               res.status(200).json({token});
         } else {
          res.status(409).json({msg: 'User already exists'});
         }
     } else {
          res.status(422).json({msg: 'Please, provide all required credentials'})
     }
     return;
});

exports.signIn = asyncHandler(async(req: Request, res: Response) => {
     const {email, password} = req.body;
     if (email && password) {
          const user = await User.findOne({email});
          if (user?._id && await user.comparePassword(password)) {
               req.user = user;
               const token = user.generateJWT({res, userId: user?._id});
               res.status(200).json({token});
          } else {
               res.status(422).json({msg: 'Invalid credentials'})   
          }
     } else {
          res.status(422).json({msg: 'Please, provide all required credentials'});    
     }
     return;
});

exports.signOut = asyncHandler(async(req: Request, res: Response) => {
     req.user = null;
     res.status(200).json({msg: 'User signed out'});
     return;
});



