"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pokedex {
    constructor() {
        this.pokedex = [];
        // for(let i=0;i<3;i++){
        //     this.pokedex.push(getNextPokemon());
        // }
    }
    get pokemons() {
        return [...this.pokedex];
    }
    add(...pokemon) {
        pokemon.forEach(p => this.pokedex.push(p));
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