import {Request, Response} from 'express';
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectToDB.ts');
const authRoutes = require('./routes/authRoutes.ts');
const userRoutes = require('./routes/userRoutes.ts');
const postRoutes = require('./routes/postRoutes.ts');
const flashcardSetRoutes = require('./routes/flashcardSetRoutes.ts');
const exerciseSetRoutes = require('./routes/exerciseSetRoutes.ts');

const app = express();
const port = process.env.PORT || 4000;

const start = () => {
    connectDB(process.env.MONGO_URI).then(() => app.listen(port, () => console.log(`Server listens on port ${port}...`)))
}

start();

app.use(express.json());

app.get('/test', (req: Request, res: Response) => {
    console.log('sended')
    return res.status(200).json({msg: 'Success'});
});
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/posts', postRoutes);
app.use('/flashcard-sets', flashcardSetRoutes);
app.use('/exercise-sets', exerciseSetRoutes);
