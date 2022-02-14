/*
*   @Producto  Routers
*   @puthor  Luis Moroco
*   @versión  0.1
*   
*   Funciones: 
*       - Utimizé Express router para poder crear rutas entre el Back y Front
*       
*       - Invocamos el controlador de Productos, para poder utilizar todas sus funciones.
*       
*       - get('/endpoint/getProductos') ruta, para obtener productos.
* 
*       - get('/endpoint/getLabels/:idProducto') ruta para obtener la lista de etiquetas de un producto.
*   
*       - post('/endpoint/save') ruta para guardar un nuevo producto.
*
*       - delete('/endpoint/delete/:idProducto') ruta para eliminar productos por ID
*/

const express = require ('express');
const router = express.Router();

const productoController = require('../controllers/producto.js');

router.get('/endpoint/getProductos', productoController.getAll);
router.get('/endpoint/getLabels/:idProducto', productoController.getLabels);

router.post('/endpoint/save', productoController.addNew);

router.delete('/endpoint/delete/:idProducto', productoController.deleteById);

module.exports = router;