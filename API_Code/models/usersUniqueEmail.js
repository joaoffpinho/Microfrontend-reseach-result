const mongoose = require('mongoose');

const userEmailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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

const userEmail = mongoose.model('tbl_usersEmail', userEmailSchema);

module.exports = userEmail;