/*
*   @Server  Configuración de Express y NodeJS
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   @params  {Port} : Puerto que escuchará nuestras peticiones : 5000
*      
*   - Configuramos express como core de la App, dotenv para las variables globales, bodyParser para interpretar los parametros entre rutas
*   - Configuramos el Puerto raíz : '/' y sus derivados.
*
*   Backend, trabaja como el servidor de nuestra aplicación, con la creación de una API con las funciones básicas, 
*   esto nos permitirá trabajar con el lado del cliente (Fronted) de forma totalmente aislada. 
*
*/

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

App.use('/', require('./routes/routers'));

App.listen(5000, () => {
    console.log('Running!');
});