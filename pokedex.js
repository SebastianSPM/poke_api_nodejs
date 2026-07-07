const prompt = require("prompt-sync")();
const buscarPokemon = require('./explorar')

const nombrepokemon = prompt("Ingresa el nombre: ").toLowerCase()

const mostrarFicha = async (nombre) => {
    const pokemon = await buscarPokemon(nombre)
    if(pokemon == null){
        return;
    }
    console.log("\nPOKEMON\n", "id: ", pokemon.id, "\nNombre: ", (pokemon.name).toUpperCase());

    console.log("\nTIPO: ");
    
    for (let i of pokemon.types) {
        console.log(i.type.name);
    }

    console.log("\nESTADO: ");

    for (let i of pokemon.stats) {
        console.log(i.stat.name);
    }

    console.log("\nHabilidad: ");

    for (let i of pokemon.abilities) {
        console.log(i.ability.name);
    }
}

mostrarFicha(nombrepokemon)
