const express = require ('express');
const router = express.Router();

const conex = require('../db/config');

router.post('/endpoint/save', (req, res) => {
    const NameProducto = req.body.NameProducto;

    const sqltest = 'INSERT INTO Productos(Nombre) VALUES(?)';
    conex.query(sqltest, [NameProducto], (err, res) => {
        console.log(res);
    });
});

module.exports = router;