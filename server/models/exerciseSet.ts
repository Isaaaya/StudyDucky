const mongoose = require('mongoose');

const exerciseSetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
    },
    tip: {
        type: String,
        required: true,
    },
    exercises: [{
            type: {
                type: String,
                enum: ['translate', 'connect', 'choose', 'listen']
            },
            correctAnswer: {
                type: String,
                required: true,
            },
            answerOptions: {
                type: [String],
            },
            wordForTranslation: {
                type: String,
            },
            phraseParts: {
                part1: String,
                part2: String,
            }
        }],
        
    
});


module.exports = mongoose.model('ExerciseSet', exerciseSetSchema);