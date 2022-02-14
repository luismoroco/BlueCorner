/*
*   @Producto  COnexión con MySQL
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   @params  {void} : connection - Puente con la base datos, para poder ejecutar Querys
*
*   Funciones: 
*       - Usé env, para facilitar la configuración de las variables globales.
*       - exportamos la conexión a la base, para poder ser utilizada.
*/

const mysql = require('mysql')

const connection = mysql.createConnection({
    host : process.env.DB_HOST, 
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,  
});

connection.connect((error) => {
    if (error) {
        console.log(error);
        return;
    }
    else {
        console.log('ÉXITO');
    }
});

module.exports = connection;