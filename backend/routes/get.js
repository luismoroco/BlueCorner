const express = require ('express');
const router = express.Router();


const conex = require('../db/config');


router.get('/testing', (req, res) => {

    conex.query('SELECT * FROM Productos', function(err, rows){
        if (err) {
            console.log("FATAL :'V", err);
        } 
        else {
            console.log("GOZU! ==> ", rows );
        }
    });

    res.send('HECHO');

});

module.exports = router;