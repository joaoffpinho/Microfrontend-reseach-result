const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT  || 3000;

const usersUniqueName = require('./routes/usersUniqueName.js');
const usersUniqueEmail = require('./routes/usersUniqueEmail.js');

const utilities = require('./utilities/utilities.js');
const cors = require("cors");

/* documentação swagger */
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {explorer: true}));


const auth = function(req, res, next) {
    let exceptions = [
        '/api-docs',
        '/usersUniqueName/login',
        '/usersUniqueEmail/login',
        '/usersUniqueName/register',
        '/usersUniqueEmail/register',
        '/usersUniqueName/getAll',
        '/usersUniqueEmail/getAll',
        '/usersUniqueName/:id',
        '/usersUniqueEmail/:id',
        '/usersUniqueName/:id/update',
        '/usersUniqueEmail/:id/update',
    ];
    if(exceptions.indexOf(req.url) >= 0) {
        next();
    } else {
        utilities.validateToken(req.headers.authorization, (result) => {
            if(result) {
                next();
            } else {
                res.status(401).send("Invalid Token");
            }
        })
    }
}

app.use(express.json());
// app.use(auth);
app.use(cors());
app.use('/usersUniqueName', usersUniqueName);
app.use('/usersUniqueEmail', usersUniqueEmail);

mongoose.connect('mongodb+srv://joaopinho:joaopinho@bindtuningtesting.5hqwe1u.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected to MongoDB")
});

app.listen(port, function() {
    console.log("App is running on port" + port)
})