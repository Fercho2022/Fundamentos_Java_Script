const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{

    res.render('index', {titulo: "mi titulo dinámico"})

})

router.get('/servicios', (req, res) => {

    res.render('servicios', {tituloServicio: "Este es un mensaje dinamico de servicios"})
})


module.exports = router;