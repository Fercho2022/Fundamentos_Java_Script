
const express = require("express");

const app= express();

const port = process.env.PORT || 3000;

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