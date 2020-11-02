"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokelist_1 = require("./Pokelist");
class Pokedex {
    constructor() {
        this.pokedex = [];
        for (let i = 0; i < 3; i++) {
            this.pokedex.push(Pokelist_1.getNextPokemon());
        }
    }
    get pokemons() {
        return [...this.pokedex];
    }
    add(pokemon) {
        this.pokedex.push(pokemon);
    }
    remove(i) {
        try {
            this.pokedex.splice(i, 1);
        }
        catch (error) {
        }
    }
    setInv(func) {
        this.pokemons.forEach(p => {
            if (func(p)) {
                p.setInv(true);
            }
            else {
                p.setInv(false);
            }
        });
    }
}
exports.Pokedex = Pokedex;
//# sourceMappingURL=Pokedex.js.map