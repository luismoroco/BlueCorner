const productoModel = require('../models/producto');

class Producto {
    static async getByid( req, res ) {

    };

    static async getAll(req, res) {
        const ListProductos = await productoModel.getAll();
        res.send(ListProductos[0]);
    };

    static async addNew( req, res) {
        const {NameProducto} = req.body;
        await productoModel.addProducto(NameProducto);
        res.send('OK');
    };


    static async addLabel( req, res ) {

        //

    } 

    static async deleteLabel( req, res ) { 

        //

    }

};

module.exports = Producto;