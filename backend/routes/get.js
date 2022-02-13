const express = require ('express');
const router = express.Router();

const conex = require('../db/config');

router.get('/endpoint/getProductos', (req, res) => {
    conex.query('SELECT * FROM Productos', function(err, rows){
        if (err) {
            console.log("FATAL :'V", err);
        } 
        else {
            console.log("GOZU! ==> ", rows );
            res.send(rows);
        }
    });
});

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