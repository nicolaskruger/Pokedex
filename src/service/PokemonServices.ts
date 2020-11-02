import {Pokemon} from '../model/Pokemon';
import {ConnectionFactory} from './ConnectionFactory';
import {pokemonDao} from '../dao/pokemonDao';

export class PokemonServices {
    constructor() {
        
    }
    add(...todo:Array<Pokemon>){
        return ConnectionFactory
                .getConnection()
                .then(connection=>new pokemonDao(connection))
                .then(dao => todo.forEach(td=>dao.add(td)));
    }
    getLista(){
        return ConnectionFactory
                .getConnection()
                .then(connection=> new pokemonDao(connection))
                .then(dao => dao.getLista());
    }
    getKey(){
        return ConnectionFactory
                .getConnection()
                .then(connection => new pokemonDao(connection))
                .then(dao => dao.getKeys());
    }
    delete(index:number){
        return ConnectionFactory
                .getConnection()
                .then(connection => new pokemonDao(connection))
                .then(dao => dao.delete(index));
    }
}