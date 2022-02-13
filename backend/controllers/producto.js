const productoModel = require('../models/producto');

class Producto {
    static async getByid( req, res ) {
        const {idProducto} = req.body;
        const listaProductos = await productoModel.getByid(idProducto);
        
    };

    static async getAll( req, res) {

        //

    };

    static async( req, res) {

        //

    };


    static async addLabel( req, res ) {

        //

    } 

    static async deleteLabel( req, res ) { 

        //

    }

};

module.exports = Producto;