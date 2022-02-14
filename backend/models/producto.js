/*
*   @Producto  Modelo de Productos
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   @params  {Integer} : idProducto - Identificador único de objetos recibidos del Fronted.
*   @params  {String} : NameProducto - Nombre para Buscar, agregar y buscar elementos en la base de datos.
*
*   Funciones: 
*       - Todas las funciones utilizan procedimientos almacenados, para proteger las sentencias y poder usar promesas.
*       - La estructura y ejemplo de cada una de ellas esta explicada en ./db/dbModel.sql.
*       - Todas devuelven una respuesta de la base de datos.
*/

const conex = require('../db/config');

class Producto {

    static addProductoId(nameProducto) {
        return new Promise ((resolve, reject) => {
            conex.query("call SaveNewProductoId(?)", [nameProducto], function(err, rows) {
                if ( err ) {
                    return reject([]);
                } else {
                    return resolve(rows);
                }
            });  
        }); 
    };

    static getLabelByid(idProducto) {
        return new Promise ((resolve, reject) => {
            conex.query("call getLabelsById(?)", [idProducto], function(err, rows) {
                if (err) {
                    console.log( err );
                    return reject([]);
                } else {
                    console.log(rows);
                    return resolve(rows);
                }
            });  
        });  
    };

    static getAll() {
        return new Promise ((resolve, reject) => {
            conex.query("call GetAllProductos()", function(err, rows) {
                if (err) {
                    return reject([]);
                } else {
                    return resolve(rows);
                }
            });
        });
    };

    static deleteByid(idProducto) {
        return new Promise ((resolve, reject) => {
            conex.query("call delete_Producto(?)", [idProducto], function(err, rows) {
                if (err) {
                    console.log(err);
                    return reject([]);
                } else {
                    console.log(rows);
                    return resolve(rows);
                }
            });
        });
    };
    
};

module.exports = Producto;