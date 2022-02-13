const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config({path: './env/.env'});

const App = express();


const conex = require('./db/config.js');


App.use(cors())
App.use(express.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(express.urlencoded({ extended: false }));

App.use('/', require('./routes/get.js'));
//App.use('/', require('./routes/post.js'));

App.get('/', (req, res) => {
    res.send('Main Page works GAA');
});




App.post('/endpoint/save', (req, res) => {
    const NameProducto = req.body.NameProducto;

    const sqltest = 'INSERT INTO Productos(Nombre) VALUES(?)';
    conex.query(sqltest, [NameProducto], (err, res) => {
        console.log(res);
    });
});





App.listen(5000, () => {
    console.log('Running!');
});