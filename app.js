
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
            const arrayNombres= data.results.map (poke => poke.name) 
                console.log(arrayNombres)
            


        }catch(error){

            console.log(error)
        }



}

devPokemones()