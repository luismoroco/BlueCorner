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

    static saveNewProducto(nameProducto) {
        return new Promise ((resolve, reject) => {
            conex.query("call SaveNewProducto(?)", [nameProducto], function(err, rows) {
                if ( err ) {
                    reject([]);
                } else {
                    resolve(rows);
                }
            });  
        }); 
    };

    static getLabelByid(idProducto) {
        return new Promise ((resolve, reject) => {
            conex.query("call getLabelsById(?)", [idProducto], function(err, rows) {
                if (err) {
                    return reject([]);
                } else {
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
                    reject([]);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    static getIdByName(NameProducto) {
        return new Promise ((resolve, reject) => {
            conex.query("call GetIdByName(?)", [NameProducto], function(err, rows) {
                if (err) {
                    return reject([]);
                } else {
                    return resolve(rows[0][0].Id_producto);
                }
            });  
        });  
    };

    static addLabel(idProducto, NameProducto) {
        return new Promise ((resolve, reject) => {
            conex.query("call update_etiquetas(?,?)", [idProducto, NameProducto], function(err, rows) {
                if (err) {
                    reject([]);
                } else {
                    resolve(rows);
                }
            });  
        });  
    };
};

module.exports = Producto;