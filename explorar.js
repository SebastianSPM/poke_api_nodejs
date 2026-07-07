const buscarPokemon = async (nombrepokemon) => {
    const datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrepokemon}`);

    if(!datos.ok){
        console.log("Error al cargar los datos, código: ", datos.status);
        return null;
    }
    
    const data = await datos.json()

    return data
    
}

module.exports = buscarPokemon