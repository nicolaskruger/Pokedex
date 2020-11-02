import {Pokemon} from './Pokemon';
import {getNextPokemon} from './Pokelist';
export class Pokedex {
    pokedex:Pokemon[] = [];
    get pokemons(){
        return [...this.pokedex];
    }
    constructor() {
        // for(let i=0;i<3;i++){
        //     this.pokedex.push(getNextPokemon());
        // }
    }
    add(... pokemon:Pokemon[]){
        pokemon.forEach(p=>this.pokedex.push(p));
    }
    remove(i:number){
        try {
            this.pokedex.splice(i,1);
        } catch (error) {
            
        }
    }
    setInv(func:(s:Pokemon)=>boolean){
        this.pokemons.forEach(p=>{
            if(func(p)){
                p.setInv(true);
            }
            else{
                p.setInv(false);
            }
        })
    }

}