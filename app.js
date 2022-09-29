
const {frutas, dinero} = require ('./frutas')

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hola amigos de bluuweb",
    e : "oO",
    T : "U "
}));


frutas.forEach(item =>{

    console.count(item)


})




const devPokemones = async() => {

        try{
            const res = await fetch ('https://pokeapi.co/api/v2/pokemon/')
            const data = await res.json()
            console.log(data.results)
            data.results.forEach(element => {
                console.log(element.name)
            })


        }catch(error){

            console.log(error)
        }



}

devPokemones()