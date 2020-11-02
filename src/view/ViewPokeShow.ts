import {View} from './View';
import { Pokemon } from '../model/Pokemon'
export class ViewPokeShow extends View{
    private maskElemente
    constructor(element:HTMLElement,maskElement:HTMLElement) {
        super(element);
        this.maskElemente=maskElement;
    }
    public template(model:Pokemon){
        return `
        <div class="pokeImg">
            <img src="${model.img}" alt="${model.name}">
            <ul>
                ${model.type.map(s=>`<li style="background-color: ${Pokemon.color[s]};border: 2px solid ${Pokemon.color[s]};">${s}</li>`).join('')}
            </ul>

        </div>
        <div class="descricao">
            <h2>${model.name}</h2>
            <p>${model.description}</p>
        </div>
        ` 
    }
    public setMask(b:boolean){
        this.setInvisibity(b,this.maskElemente);
    }
}