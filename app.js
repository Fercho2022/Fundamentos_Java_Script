
const express = require("express");

const app= express();

const port =process.env.PORT || 3000;

//motor de plantilla
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) =>{

    res.render('index', {titulo: "mi titulo dinámico"})
})

app.get('/servicios', (req, res) => {

    res.render('servicios', {tituloServicio: "Este es un mensaje dinamico de servicios"})
})


app.listen (port, ()=>{

    console.log('servidor a su servicio en el puerto', port)
})