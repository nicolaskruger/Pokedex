"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
const Pokemon_1 = require("../model/Pokemon");
class ViewPokeShow extends View_1.View {
    constructor(element, maskElement) {
        super(element);
        this.maskElemente = maskElement;
    }
    template(model) {
        return `
        <div class="pokeImg">
            <img src="${model.img}" alt="${model.name}">
            <ul>
                ${model.type.map(s => `<li style="background-color: ${Pokemon_1.Pokemon.color[s]};border: 2px solid ${Pokemon_1.Pokemon.color[s]};">${s}</li>`).join('')}
            </ul>

        </div>
        <div class="descricao">
            <h2>${model.name}</h2>
            <p>${model.description}</p>
        </div>
        `;
    }
    setMask(b) {
        this.setInvisibity(b, this.maskElemente);
    }
}
exports.ViewPokeShow = ViewPokeShow;
//# sourceMappingURL=ViewPokeShow.js.map