"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pokemon {
    constructor(type = ["Water"], name = "Squardle", description = "When it retracts its long neck into its shell, it squirts out water with vigorous force.", img = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png") {
        this.type = [];
        this.inv = false;
        this.name = name;
        this.description = description;
        this.img = img;
        this.type = type.map(s => s.toLowerCase());
    }
    setInv(b) {
        this.inv = b;
    }
    clone() {
        return new Pokemon(this.type, this.name, this.description, this.img);
    }
    stringFy() {
        return [this.name, this.description, this.img];
    }
    selectFy() {
        return Pokemon.types.map(t => this.type.includes(t));
    }
    get Inv() {
        return this.inv ? "inv" : '';
    }
}
Pokemon.types = [
    "grass",
    "poison",
    "fire",
    "water",
    "bug",
    "flying",
    "normal",
    "electric",
    "ground"
];
Pokemon.color = {
    "grass": "green",
    "poison": "purple",
    "fire": "orange",
    "water": "lightblue",
    "bug": "darkgreen",
    "flying": "gray",
    "normal": "darkgray",
    "electric": "yellow",
    "ground": "darkgoldenrod"
};
exports.Pokemon = Pokemon;
//# sourceMappingURL=Pokemon.js.map