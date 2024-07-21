require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectToDB');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const flashcardSetRoutes = require('./routes/flashcardSetRoutes');
const exerciseSetRoutes = require('./routes/exerciseSetRoutes');

const app = express();
const port = process.env.PORT || 4000;

const start = () => {
    connectDB(process.env.MONGO_URI).then(() => app.listen(port, () => console.log(`Server listens on port ${port}...`)))
}

start();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/posts', postRoutes);
app.use('/flashcard-sets', flashcardSetRoutes);
app.use('/exercise-sets', exerciseSetRoutes);
