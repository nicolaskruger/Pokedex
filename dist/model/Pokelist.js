"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
let lista = [
    new Pokemon_1.Pokemon(["grass", "poison"], "Bulbasaur", "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"),
    new Pokemon_1.Pokemon(["fire"], "Charmander", "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"),
    new Pokemon_1.Pokemon(),
    new Pokemon_1.Pokemon(["electric"], "Pikachu", "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"),
];
let cur = -1;
function getNextPokemon() {
    cur = (cur + 1) % lista.length;
    return lista[cur].clone();
}
exports.getNextPokemon = getNextPokemon;
//# sourceMappingURL=Pokelist.js.map