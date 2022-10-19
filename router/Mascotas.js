const express = require('express');
const router = express.Router();
const Mascota=require('../models/mascota')
const bodyParser=require ('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



router.get('/', async (req, res) => {

        try{
                const arrayMascotasDB= await Mascota.find();
                console.log(arrayMascotasDB)
                
                res.render('mascotas', {
                        arrayMascotas: arrayMascotasDB
                })

                    

        }catch(error){

                console.log(error)
        }


        })

router.get('/crear', (req, res) => {

        res.render('crear')
})

router.post('/', async (req, res) =>{

        const body =req.body
        try {
                // una de las formas para guardar una nuevo objeto mascota  en mongoDB:

                const mascotaDB=new Mascota(body)
                await mascotaDB.save()

                // Segunda forma para guardar en mongoDB:
                //Mascota.create(body)


               res.redirect('/mascotas')
        }catch (error){

                console.log(error)
        }
        
})

router.get('/:id', async (req, res) => {

        const id = req.params.id

        try{
                const mascotaDB= await Mascota.findOne({_id: id});
                console.log(mascotaDB)
                res.render('detalle', {mascota: mascotaDB, error:false})
                
        }catch(error){

                console.log(error)
                res.render('detalle', {error: true, mensaje: 'Nose encuentra el id seleccionado'})
        }
})

router.put('/:id', async(req, res) =>{

        const id = req.params.id
        const body =req.body
        try {
                                
                const mascotaDB=await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false  })
                console.log(mascotaDB)
                res.json({

                     estado: true,
                     mensaje:'Editado'

                })
        }catch (error){

                console.log(error)

                res.json({
                        estado: false,
                        mensaje: 'Fallamos'

               })
        }

})

module.exports = router;