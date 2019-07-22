const mongoose = require('mongoose');
const {Schema} = mongoose;
const Helper = require('../helpers/helper')

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [
            {
                validator: function(value) {
                    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                        throw 'Invalid email format'
                    }
                },
            },
            {
                validator: function(value) {
                    return User.find({
                        _id: { $ne: this._id },
                        email: value
                    })
                    .then( data => {
                        if(data.length !== 0) {
                            throw 'Email has been registered';
                        }
                    })
                    .catch(err => {
                        throw err;
                    });
                }
            }
        ]
    },
    password: {
        type: String,
        required: true,
        minlength: [4, 'Password min length is 4'],
    }
});

userSchema.pre('save', function(next, done) {
    this.password = Helper.hashPassword(this.password)
    next()
});

const User = mongoose.model('User', userSchema);

module.exports = User