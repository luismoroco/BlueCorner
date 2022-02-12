const express = require('express');
const dotenv = require('dotenv');



dotenv.config({path: './env/.env'});



const App = express();



App.use('/', require('./routes/get.js'));



App.get('/', (req, res) => {

    res.send('Main Page works GAA');

});


App.listen(5000, () => {

    console.log('Running!');

});

// https://www.youtube.com/watch?v=3YrOOia3-mo