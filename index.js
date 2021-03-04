var fs = require('fs');
var fetch = require('node-fetch')

var pokemonList = fs.readFileSync('input.txt', 'utf8') 
var pokemonArray = pokemonList.split('\n')

pokemonArray.forEach(pokemon => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => data.types)
    .then(types => {
        let typeNameArray = []
        types.forEach(type => {
            typeNameArray.push(type.type.name)
        })
        
        return typeNameArray.sort().reverse()
        
    })
    .then(typeNameArray => console.log(`${pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}: ${typeNameArray.join(", ")}`))

})

// Charizard: flying, fire
// Pikachu: electric