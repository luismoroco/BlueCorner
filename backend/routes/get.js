const express = require ('express');
const router = express.Router();

const conex = require('../db/config');

const productoController = require('../controllers/producto.js');

router.get('/endpoint/getProductos', productoController.getAll);


router.get('/stored', (req, res) => {
    conex.query("call GetAllProductos()", function(err, rows) {
        if ( err ) {
            console.log( err );
            return;
        } else {
            console.log( rows );
        }
    });

    res.send('HECHO');

});

module.exports = router;