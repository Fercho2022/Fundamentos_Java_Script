
const express = require("express");

const app= express();

require('dotenv').config()

const port = process.env.PORT || 3000;

//Conexión con bases de datos
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const uri=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ydypzoz.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

//motor de plantilla
app.set("view engine", "ejs");

app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));


// Rutas web

app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));



app.listen (port, ()=>{

    console.log('servidor a su servicio en el puerto', port)
})