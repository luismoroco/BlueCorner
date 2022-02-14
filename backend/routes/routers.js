const express = require ('express');
const router = express.Router();

const productoController = require('../controllers/producto.js');

router.get('/endpoint/getProductos', productoController.getAll);

router.post('/endpoint/save', productoController.addNew);

router.delete('/endpoint/delete/:idProducto', productoController.deleteById);

module.exports = router;