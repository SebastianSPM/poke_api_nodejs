const prompt = require("prompt-sync")();

const buscarPokemon = require("./explorar");

let pokemon1 = prompt("Ingresa el pokemon 1: ").toLowerCase();
let pokemon2 = prompt("Ingresa el pokemon 2: ").toLowerCase();

console.log("Estados: \n- attack \n- hp \n- defense \n- special-attack \n- special-defense \n- speed ");
let stat = prompt("Ingresa el estado del pokemon: ").toLowerCase();

const obtenerStats = (datos, nombreStat) => {

    for(const stat of datos.stats){
        if(stat.stat.name === nombreStat){
            return stat.base_stat;
        }
    }

    return null;
}


const compararPokemon = async (pokemon1, pokemon2, stat) => {

    pokemon1 = await buscarPokemon(pokemon1);
    pokemon2 = await buscarPokemon(pokemon2);

    if(pokemon1 == null || pokemon2 == null){
        console.log("No sé puede comparar.");
        return;
    }

    const valor1 = await obtenerStats(pokemon1, stat)
    const valor2 = await obtenerStats(pokemon2, stat)

    if(valor1 == null || valor2 == null){
        console.log("El estado del pokemon no existe.");
        return null;
    }

    impresionPokemon(pokemon1, pokemon2, valor1, valor2);

    if(valor2 < valor1){
        console.log(`Ganó: ${pokemon1.name}\n`);
    }else if(valor1 < valor2){
        console.log(`Ganó: ${pokemon2.name}\n`);
    }else{
        console.log(`Empate: pokemon 1: ${pokemon1.name} - pokemon 2: ${pokemon2.name}\n`);
    }

}

const impresionPokemon = (pokemon1, pokemon2, valor1, valor2) => {

    console.log("\n *** POKEMON - COMPARACIÓN *** ");
    console.log(`Nombre: ${pokemon1.name} - Estado: ${valor1}`);
    console.log(`Nombre: ${pokemon2.name} - Estado: ${valor2}`);
}


compararPokemon(pokemon1, pokemon2, stat);

