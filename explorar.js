let stop = 1;

const buscarPokemon = async (nombrepokemon) => {
    const datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrepokemon}`);

    if(!datos.ok){
        console.log("Error al cargar la api, código: ", datos.status);
        return null;
    }
    
    const data = await datos.json()

    console.log("\nTIPO: ");
    
    for (let i of data.types) {
        console.log(i.type.name);
    }

    console.log("\nESTADO: ");
    for (let i of data.stats) {
        console.log(i.stat.name);
    }

    console.log("\nHabilidad: ");
    for (let i of data.abilities) {
        console.log(i.ability.name);
    }
    return{
        id: data.id,
        name: data.name
    }
    
}

module.exports = buscarPokemon