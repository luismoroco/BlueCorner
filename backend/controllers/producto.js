const productoModel = require('../models/producto');

class Producto {
    static async getByid(req, res) {

    };

    static async deleteById(req, res) {
        const { idProducto } = req.params;
        await productoModel.deleteByid(idProducto);
        res.send('OK');
    };

    static async getAll(req, res) {
        const listProductos = await productoModel.getAll();
        res.send(listProductos[0]);
    };

    static async addNew( req, res) {
        const { NameProducto } = req.body;
        await productoModel.addProducto(NameProducto);
        res.send('OK');
    };

    static async getLabels(req, res) {
        const { idProducto } = req.params;
        const listLabelsById = await productoModel.getLabelByid(idProducto);
        console.log(listLabelsById);
        res.send(listLabelsById[0]);
    };

    static async addLabel( req, res ) {

    };

    static async deleteLabel( req, res ) {
         
    };

};

module.exports = Producto;