const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({path: './env/.env'});

const App = express();

App.use(bodyParser.urlencoded({ extended: false }))
App.use(express.urlencoded({ extended: false }));

App.use('/', require('./routes/get.js'));

App.get('/', (req, res) => {

    res.send('Main Page works GAA');

});

App.listen(5000, () => {

    console.log('Running!');

});