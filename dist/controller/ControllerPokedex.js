"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ViewAdd_1 = require("../view/ViewAdd");
const ViewPokedex_1 = require("../view/ViewPokedex");
const Pokedex_1 = require("../model/Pokedex");
const Pokemon_1 = require("../model/Pokemon");
const Bind_1 = require("../helper/Bind");
const ViewPokeShow_1 = require("../view/ViewPokeShow");
const Pokelist_1 = require("../model/Pokelist");
class ControllerPokedex {
    constructor() {
        this.$ = document.querySelector.bind(document);
        this.htmlAdd = this.$(".pokeadd");
        this.viewAdd = new ViewAdd_1.ViewAdd(this.htmlAdd);
        this.htmlPokedex = this.$(".listaPokemon");
        this.viewPokedex = new ViewPokedex_1.ViewPokedex(this.htmlPokedex);
        this.pokedex = Bind_1.Bind.create(new Pokedex_1.Pokedex(), this.viewPokedex, 'add', 'remove', 'setInv');
        this.viewPokeS = new ViewPokeShow_1.ViewPokeShow(this.$(".pokeS"), this.$(".pokeshow"));
        this.current = 0;
        this.input = [
            this.$("#name"),
            this.$("#descr"),
            this.$("#imagem"),
        ];
        this.filterText = this.$("#filter");
        this.filterType = this.$("#types");
        this.checkbox = [
            this.$("#grass"),
            this.$("#poison"),
            this.$("#fire"),
            this.$("#water"),
            this.$("#bug"),
            this.$("#flying"),
            this.$("#normal"),
            this.$("#electric"),
            this.$("#ground"),
        ];
        this.atlList();
        this.nextPokemon();
    }
    addScreen() {
        this.viewAdd.setInvisibity(false);
    }
    closeScreen() {
        this.viewAdd.setInvisibity(true);
    }
    closePokeShow() {
        this.viewPokeS.setMask(true);
    }
    add(event) {
        event.preventDefault();
        let values = this.input.map(s => s.value);
        let types = this.checkbox.filter(s => s.checked).map(s => s.id);
        this.pokedex.add(new Pokemon_1.Pokemon(types, ...values));
        this.nextPokemon();
        this.closeScreen();
        this.atlList();
        this.filterByType();
    }
    clear() {
        this.input.forEach(s => s.value = '');
        this.checkbox.forEach(s => s.checked = false);
    }
    nextPokemon() {
        let nextP = Pokelist_1.getNextPokemon();
        let str = nextP.stringFy();
        let bool = nextP.selectFy();
        this.input.forEach((s, i) => s.value = str[i]);
        this.checkbox.forEach((s, i) => s.checked = bool[i]);
    }
    showPoke(i) {
        this.current = i;
        this.viewPokeS.set(this.pokedex.pokemons[i]);
        this.viewPokeS.setMask(false);
    }
    deltePoke() {
        this.pokedex.remove(this.current);
        this.viewPokeS.setMask(true);
        this.atlList();
    }
    filterByName() {
        let val = this.filterText.value;
        this.pokedex.setInv((p) => !p.name.toLowerCase().includes(val.toLowerCase()));
        this.atlList();
    }
    filterByType() {
        let val = this.filterType.options[this.filterType.selectedIndex].value;
        this.pokedex.setInv((p) => {
            if (val == 'none')
                return false;
            return !(p.type.includes(val.toLowerCase()));
        });
        this.atlList();
    }
    atlList() {
        this.pokeShow = document.querySelectorAll(".pokemon");
        for (let i = 0; i < this.pokeShow.length; i++) {
            this.pokeShow[i].removeEventListener('click', this.showPoke.bind(this, i));
            this.pokeShow[i].addEventListener('click', this.showPoke.bind(this, i));
        }
    }
}
exports.ControllerPokedex = ControllerPokedex;
//# sourceMappingURL=ControllerPokedex.js.map