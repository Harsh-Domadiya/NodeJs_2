const mongoose = require('mongoose');

const TweetModel = mongoose.Schema({
    description: {
        type: String,
        trim: true
    },
    media: {
        type: [String]
    },
    comment: {
        type: [{
            userId: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }]
    },
    like: {
        type: Number,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    edit: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
}, { versionKey: false });

module.exports = mongoose.model('TweetModel', TweetModel);