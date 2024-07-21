const mongoose = require('mongoose');

const flashcardSetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    bgColor: {
        type: String,
    },
    words: {
        type: [{"english": String, "ukrainian": String}]
    }
});


module.exports = mongoose.model('FlashcardSet', flashcardSetSchema);