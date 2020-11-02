import { Pokemon } from './Pokemon';
let lista:Pokemon[] =[
                new Pokemon(["grass","poison"],
                "Bulbasaur",
                "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"),
                new Pokemon(["fire"],
                "Charmander",
                "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"),
                new Pokemon(),
                new Pokemon(["electric"],
                "Pikachu",
                "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"),
    
] ;
let cur =-1;
export function getNextPokemon():Pokemon{
    cur=(cur+1)%lista.length;
    return lista[cur].clone();
}