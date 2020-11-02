import {View} from './View';
import {Pokedex} from '../model/Pokedex'
import { Pokemon } from '../model/Pokemon';
export class ViewPokedex extends View{
    constructor(element:HTMLElement) {
        super(element);
    }
    public template(model:Pokedex){
        return model.pokemons
                    .map(s => `
                    <li class="pokemon ${s.Inv}">
                    <img src="${s.img}" alt="">
                    <h2>${s.name}</h2>
                    <ul>
                        ${s.type.map(s => `
                        <li style="background-color: ${Pokemon.color[s]};border: 2px solid ${Pokemon.color[s]};">
                            ${s}
                        </li>
                        `).join('')}
                        
                    </ul>
                    
                </li>
                    `).join('');
    }
}