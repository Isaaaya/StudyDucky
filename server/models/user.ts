const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import { NextFunction, Response } from "express";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 100

    },
    city: {
        type: String,
        min: 2
    },
    interests: {
        type: [String],
        default: [],
        enum: [
        "Art",
        "Music",
        "Technology",
        "Literature",
        "Sports",
        "Science",
        "History",
        "Travel",
        "Cooking",
        "Gardening",
        "Photography",
        "Fashion",
        "Fitness",
        "Film and TV",
        "Gaming",
        "Theater",
        "Writing",
        "Crafting",
        "Astronomy",
        "Languages",
        "Nature",
        "Animals",
        "Volunteering",
        "DIY Projects",
        "Meditation",
        "Philosophy",
        "Politics"]
    },
    completedExerciseSets: {
        type: [mongoose.Types.ObjectId],
        ref: 'ExerciseSet'
    },
    customFlashcardSets: {
        type: [{ title: String, words: [{english: String, ukrainian: String}]}],
    },
    favoriteFlashcards: {
        type: [{english: String, ukrainian: String}]
    }
}, {timestamps: true});

interface IUserSchemaSaveEvent {
    isModified: (value: string) => boolean,
    password: string
}

userSchema.pre('save', async function(this: IUserSchemaSaveEvent, next: NextFunction) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async function(suggestedPassword: string){
    return await bcrypt.compare(suggestedPassword, this.password);
}

userSchema.methods.generateJWT =  function({res, userId}: {res: Response, userId: String}){
   const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: '30d' });
    return token;
};

export function validateUser(user: {name?: string, email: string, password: string, city?: string}) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().min(5).max(255).required(),
        password: Joi.string().min(8).max(100).required(),
        city: Joi.string().min(2).max(100),
    })
    return schema.validate(user)
};

module.exports.validate = validateUser;
module.exports = mongoose.model('User', userSchema);