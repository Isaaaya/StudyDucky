const mongoose = require('mongoose');

async function connectToDB (uri: String) {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the DB...');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectToDB;