const mongoose = require('mongoose')

let articleSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    date: Date,
    img: {
        type: String
    }
})

let Article = mongoose.model('Article', articleSchema)

module.exports = Article