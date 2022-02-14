const conex = require('../db/config');

class Producto {

    static addProducto(nameProducto) {
        return new Promise ((resolve, reject) => {
            conex.query("call SaveNewProducto(?)", [nameProducto], function(err, rows) {
                if ( err ) {
                    return reject([]);
                } else {
                    return resolve(rows);
                }
            });  
        }); 
    };

    static getByid(idProducto) {
        return new Promise ((resolve, reject) => {
            conex.query("call getProductoById(?)", [idProducto], function(err, rows) {
                if ( err ) {
                    console.log( err );
                    return reject([]);
                } else {
                    console.log("CHUPEEKING", rows);
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

    static deleteByid(idProducto, newLabel) {
        return new Promise ((resolve, reject) => {
            conex.query("call delete_Producto(?, ?)", [idProducto, newLabel], function(err, rows) {
                if (err) {
                    console.log(err);
                    return reject( [] );
                } else {
                    console.log(rows);
                    return resolve(rows);
                }
            });
        });
    };

    static addLabel( idProducto ) {
        return new Promise ((resolve, reject) => {
            conex.query("call update_etiquetas(?, ?)", [idProducto], function(err, rows) {
                if ( err ) {
                    console.log( err );
                    return reject( [] );
                } else {
                    console.log( rows );
                    return resolve(rows);
                }
            });
        });
    };

    static deleteLabel( idProducto ) {
        return new Promise ((resolve, reject) => {
            conex.query("call delete_etiquetas(?)", [idProducto], function(err, rows) {
                if ( err ) {
                    console.log( err );
                    return reject( [] );
                } else {
                    console.log( rows );
                    return resolve(rows);
                }
            });
        });
    };
    
};

module.exports = Producto;