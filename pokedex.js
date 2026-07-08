const prompt = require("prompt-sync")();
const buscarPokemon = require('./explorar')

const nombrepokemon = prompt("Ingresa el nombre: ").toLowerCase()

const mostrarFicha = async (nombre) => {

    const tipos = []
    const estados = []

    const pokemon = await buscarPokemon(nombre)
    if(pokemon == null){
        return;
    }
    console.log("\nPOKEMON\n", "id: ", pokemon.id, "\nNombre: ", (pokemon.name).toUpperCase());
    console.log(`${pokemon.height * 10}cm\n${pokemon.weight / 10}kg`);
    

    console.log("\nTIPO: ");
    
    for (let i of pokemon.types) {
        tipos.push(i.type.name)
    }
    console.log("Tipo: ", tipos.join(" / "));
    

    console.log("\nESTADO: ");

    for (let i of pokemon.stats) {
        console.log(i.stat.name, i.base_stat);
        estados.push(i.stat.name);
    }

    console.log("\nHabilidad: ");

    for (let i of pokemon.abilities) {
        console.log(i.ability.name);
    }
}

mostrarFicha(nombrepokemon)

module.exports = estados
