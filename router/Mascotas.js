const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

    res.render('mascotas', {
        
        arrayMascotas: [
                {id: 'jajajaja', nombre:'rex', descripción: 'rex descripcion'},
                {id: 'jeejjeje', nombre:'chanchan', descripción: 'chanchan descripcion'}

        ]})
})



module.exports = router;