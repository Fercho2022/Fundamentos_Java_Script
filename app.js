const http= require ('http');
const server= http.createServer((req, res)=>{

    res.end('estoy respondiendo a tu solicitudad v.3')


})

const puerto= 3000;
server.listen(puerto, ()=> {
    console.log('escuchando solicitudes')
})