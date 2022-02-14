/*
*   @Producto  Controlador de Productos
*   @puthor  Luis Moroco
*   @versión  0.1
* 
*   @params  {Integer} : idProducto - Identificador único de objetos recibidos del Fronted.
*   @params  {String} : NameProducto - Nombre para Buscar, agregar y buscar elementos en la base de datos.
*   @params  {array} : listEtiquetas - lista de strings recibidas del fronted, para ser agregadas a la tabla Etiquetas
*
*   Funciones: 
*       - addNew : recibe (string, array) Desestructuramos el req, primero creamos el objeto Producto y luego
*       iteramos en el arrar para agregar las etiquetas
*       
*       - deleteById : recibe (integer) Desestructura, e invoca la función delete del modelo por id.
*       
*       - getAll : recibe () invoca el método selectALl, que retorna todos los productos.
* 
*       - getLabels : recibe (integer) retorna las etiquetas del objeto
*/

const productoModel = require('../models/producto');

class Producto {
    static async addNew(req, res) {
        const { NameProducto, ...listEtiquetas} = req.body;
        await productoModel.saveNewProducto(NameProducto);
        const index = await productoModel.getIdByName(NameProducto);
        
        for (let i = 0; i < listEtiquetas.lisEtiquetas.length; i++){
            productoModel.addLabel(index, listEtiquetas.lisEtiquetas[i]);
        }
        res.send('OK');
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

    static async getLabels(req, res) {
        const { idProducto } = req.params;
        const listLabelsById = await productoModel.getLabelByid(idProducto);
        console.log(listLabelsById);
        res.send(listLabelsById[0]);
    };
};

module.exports = Producto;