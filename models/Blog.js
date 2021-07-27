const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        require: true
    },
    tags: {
        type: String,
        require: false
    },
    category: {
        type: Object,
        require: false
    },
    image: {
        type: String,
        require: false
    },
    content: {
        type: String,
        require: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Blog', BlogSchema);