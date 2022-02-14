const productoModel = require('../models/producto');

class Producto {
    static async getByid( req, res ) {

    };

    static async getAll( req, res) {
        const ListProductos = await productoModel.getAll();
        console.log('CHUPEEETIN!!!!!', ListProductos);
        res.send(ListProductos[0]);
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