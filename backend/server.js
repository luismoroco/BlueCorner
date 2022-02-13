const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config({path: './env/.env'});

const App = express();

App.use(cors())
App.use(express.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(express.urlencoded({ extended: false }));

App.use('/', require('./routes/get.js'));
App.use('/', require('./routes/post.js'));

App.get('/', (req, res) => {
    res.send('Main Page works GAA');
});

App.listen(5000, () => {
    console.log('Running!');
});