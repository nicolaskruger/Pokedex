import {ViewAdd} from '../view/ViewAdd';
import {ViewPokedex} from '../view/ViewPokedex'
import {Pokedex} from '../model/Pokedex';
import { Pokemon } from '../model/Pokemon';
import {ProxyFactory} from '../service/ProxyFactory'
import {Bind} from '../helper/Bind';
import {ViewPokeShow} from '../view/ViewPokeShow'
import {getNextPokemon} from '../model/Pokelist'

export class ControllerPokedex {
    private $ = document.querySelector.bind(document);
    private htmlAdd = this.$(".pokeadd") as HTMLDivElement;
    private viewAdd = new ViewAdd(this.htmlAdd);
    
    private htmlPokedex = this.$(".listaPokemon") as HTMLUListElement;
    private viewPokedex =new ViewPokedex(this.htmlPokedex);
    private pokedex:Pokedex = Bind.create(new Pokedex(),this.viewPokedex,'add','remove','setInv');

    private pokeShow:NodeListOf<Element>;
    private viewPokeS = new ViewPokeShow(this.$(".pokeS"),this.$(".pokeshow"));

    private current: number =0;

    private input = [
        this.$("#name") as HTMLInputElement,
        this.$("#descr") as HTMLInputElement,
        this.$("#imagem") as HTMLInputElement,
        
    ]
    private filterText = this.$("#filter") as HTMLInputElement;
    private filterType = this.$("#types") as HTMLSelectElement;

    private checkbox = [
        this.$("#grass") as HTMLInputElement,
        this.$("#poison") as HTMLInputElement,
        this.$("#fire") as HTMLInputElement,
        this.$("#water") as HTMLInputElement,
        this.$("#bug") as HTMLInputElement,
        this.$("#flying") as HTMLInputElement,
        this.$("#normal") as HTMLInputElement,
        this.$("#electric") as HTMLInputElement,
        this.$("#ground") as HTMLInputElement,

    ]

    constructor() {
        this.atlList();
        this.nextPokemon();
    }
    addScreen(){
        this.viewAdd.setInvisibity(false);
    }
    closeScreen(){
        this.viewAdd.setInvisibity(true);
    }
    closePokeShow(){
        this.viewPokeS.setMask(true);
    }
    add(event:Event){
        event.preventDefault();
        let values = this.input.map(s=>s.value);
        let types = this.checkbox.filter(s=>s.checked).map(s=>s.id);
        this.pokedex.add(new Pokemon(types,...values));
        this.nextPokemon();
        this.closeScreen();
        this.atlList();
        this.filterByType();
    }
    clear(){
        this.input.forEach(s=>s.value='');
        this.checkbox.forEach(s=>s.checked=false);
    }
    nextPokemon(){
        let nextP = getNextPokemon();
        let str = nextP.stringFy()
        let bool = nextP.selectFy();
        this.input.forEach((s,i)=>s.value=str[i]);
        this.checkbox.forEach((s,i)=>s.checked=bool[i]);
    }
    showPoke(i:number){
        this.current = i;
        this.viewPokeS.set(this.pokedex.pokemons[i]);
        this.viewPokeS.setMask(false)
    }
    deltePoke(){
        this.pokedex.remove(this.current);
        this.viewPokeS.setMask(true);
        this.atlList();
    }
    filterByName(){
        let val = this.filterText.value;
        this.pokedex.setInv((p:Pokemon)=>!p.name.toLowerCase().includes(val.toLowerCase()));
        this.atlList()
    }
    filterByType(){
        let val = this.filterType.options[this.filterType.selectedIndex].value;
        this.pokedex.setInv((p:Pokemon)=>{
            if(val=='none') return false;
            return !(p.type.includes(val.toLowerCase()));
        })
        this.atlList();
    }
    private atlList(){
        this.pokeShow = document.querySelectorAll(".pokemon");
        for(let i=0;i<this.pokeShow.length;i++){
            this.pokeShow[i].removeEventListener('click',this.showPoke.bind(this,i));
            this.pokeShow[i].addEventListener('click',this.showPoke.bind(this,i));
        }
    }
}