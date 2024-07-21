import {Request, Response, NextFunction} from 'express';
import asyncHandler from 'express-async-handler';
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.isAuthenticated = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (token){
        try {
           const {userId} = jwt.verify(token, process.env.JWT_SECRET);
           req.user = await User.findById(userId).select('-password');
           next();
        } catch (error) {
            res.status(401);
            throw new Error('Unauthorized, invalid token');
        } 
    } else {
        res.status(401);
        throw new Error('Unauthorized, no token');
    }
});