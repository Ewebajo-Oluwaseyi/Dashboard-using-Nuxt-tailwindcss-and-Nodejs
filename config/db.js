const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI')


const connectDB = async () => {
    try{
        mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected')
    } catch(err) {
        console.log(err.message);
        process.exist(1)
    }
}

module.exports = connectDB;