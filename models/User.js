const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    },
    catalog: [
        {
        productname: {
            type: String,
            required: false
        },
        price: {
            type: [Number],
            required: false
        }
    }
    ]
});

module.exports = mongoose.model('Users', userSchema);