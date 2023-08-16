const utilities = require('../utilities/utilities')
const user = require("../models/usersUniqueEmail");
const bcrypt = require('bcrypt');

const login = (req, res) => {

    user.find({email: req.body.email}, function (err, user) {
        if (err) {
            res.status(400).send(err); 
        }

        if(user.length > 0) {
            bcrypt.compare(req.body.password, user[0].password).then(function(result) {
                if(result) {
                    utilities.generateToken({
                        email: req.body.email, 
                        _id: req.body._id, 
                    }, (token) => {    
                        res.status(200).json(token);
                    })
                } else {
                    res.status(401).send("Not Authorized"); 
                }
            });

        } else {
            res.status(401).send("Not Authorized");
        }
    })
}

const register = (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            
            const userToCreate = new user({ 
                name: req.body.name, 
                email: req.body.email, 
                password: hash,
                work: req.body.work,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
            });

            user.find({email: req.body.email}, function (err, user) {
                if (err) {
                    res.status(400).send(err); 
                }

                if( user.length > 0 ) {
                    res.status(406).send("Duplicated user"); 
                } else {
                    userToCreate.save(function (err, newUser) {
                        if (err) {
                            res.status(400).send(err); 
                        }
                        res.status(200).json("Registered user"); 
                    })
                }
            })
        });
    });
}

const getAllUsers = (req, res) => {
    user.find().then((result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const getOneUser= (req, res) => {
    user.findById(req.params.id).then((result) => {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).send('not found')
        }
    }).catch((err) => {
        res.status(400).send('error')
    })
}

const updateUser = async (req, res) => {
    let hashedPassword
    const update = req.body;


    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(req.body.password, salt);
    }
    
    update.password = hashedPassword;
    delete update.email;
    user.findByIdAndUpdate(req.params.id, update).then((result) => {
        if (result) {
            res.status(200).send(`User id: ${req.params.id} change made successfully`);
        }
        else {
            res.status(404).send('not found')
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

const deleteUser = (req, res) => {
    user.findByIdAndDelete(req.params.id).then((result) => {
        if (result) {
            res.status(200).send(`User id:${req.params.id} successfully deleted`)
        } else {
            res.status(404).send('user not found');
        }
    }).catch((error) => {
        res.status(400).send(error);
    })
}

exports.login = login; 
exports.register = register;
exports.getAllUsers = getAllUsers;
exports.getOneUser = getOneUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;