const express = require('express');
const routes = require('../controller/routes.controller');
const {authenticateJWT} = require('../middleware/middleware')
const app = express();


console.log(process.env.TOKEN_SECRET);
app.get('/getMongoData',authenticateJWT, routes.find);
app.get('/getApiPoke', routes.poke);
app.get('/authenticate', routes.autenticate);
app.get('/test',authenticateJWT, routes.test);

module.exports = app;