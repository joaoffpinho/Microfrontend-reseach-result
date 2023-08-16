const express = require('express')
const router = express.Router();
const controller = require('../controllers/usersUniqueName')

router.post('/login', (req, res) => {
    controller.login(req, res);
})

router.post('/register', (req, res) => {
    controller.register(req, res);
})

router.get('/getAll', ( req, res) => {
    controller.getAllUsers(req,res);
})

router.get('/:id', ( req, res) => {
    controller.getOneUser(req,res);
})

router.put('/:id/update', (req, res) => {
    controller.updateUser(req, res)
})

router.delete('/:id', (req, res) => {
    controller.deleteUser(req, res)
})

module.exports = router