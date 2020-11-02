"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
const Pokemon_1 = require("../model/Pokemon");
class ViewPokedex extends View_1.View {
    constructor(element) {
        super(element);
    }
    template(model) {
        return model.pokemons
            .map(s => `
                    <li class="pokemon ${s.Inv}">
                    <img src="${s.img}" alt="">
                    <h2>${s.name}</h2>
                    <ul>
                        ${s.type.map(s => `
                        <li style="background-color: ${Pokemon_1.Pokemon.color[s]};border: 2px solid ${Pokemon_1.Pokemon.color[s]};">
                            ${s}
                        </li>
                        `).join('')}
                        
                    </ul>
                    
                </li>
                    `).join('');
    }
}
exports.ViewPokedex = ViewPokedex;
//# sourceMappingURL=ViewPokedex.js.map