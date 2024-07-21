const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 2
    },
    contentEnglish: {
        type: String,
        required: true,
        min: 2
    },
    contentUkrainian: {
        type: String,
        required: true,
        min: 2
    }
});

module.exports = mongoose.model('Post', postSchema);