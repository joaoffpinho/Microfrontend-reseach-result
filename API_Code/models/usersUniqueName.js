const mongoose = require('mongoose');

const userNameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    work: {
        type: String,
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        unique: true,
        sparse: true,
    }


});

const userName = mongoose.model('tbl_usersName', userNameSchema);

module.exports = userName;