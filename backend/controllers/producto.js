const productoModel = require('../models/producto');

class Producto {
    static async getByid( req, res ) {
        const {idProducto} = req.params;
        console.log('DATA => ', req.params);

        const ProductoById = await productoModel.getByid(idProducto)
            .catch(err => {console.log('ERROR!')});
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