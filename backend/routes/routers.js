const express = require ('express');
const router = express.Router();


const conex = require('../db/config');



const productoController = require('../controllers/producto.js');



router.get('/endpoint/getProductos', productoController.getAll);



router.post('/endpoint/save', productoController.addNew);










module.exports = router;