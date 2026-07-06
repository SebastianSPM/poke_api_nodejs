const prompt = require("prompt-sync")();
const buscarPokemon = require('./explorar')

const nombrepokemon = prompt("Ingresa el nombre: ").toLocaleLowerCase()

const poke = async (nombre) => {
    const pokemon = await buscarPokemon(nombre)
    console.log("\nPOKEMON \n", "id: ", pokemon.id, "\nNombre: ", pokemon.name);
}

poke(nombrepokemon)
