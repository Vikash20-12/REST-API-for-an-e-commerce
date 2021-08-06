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
    catalog: [{
        itemname: String,
        itemprice: Number
    }]

});

module.exports = mongoose.model('Users', userSchema);