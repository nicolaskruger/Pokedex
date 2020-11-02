import {ConnectionFactory} from '../service/ConnectionFactory';
import {Pokemon} from '../model/Pokemon';

export class pokemonDao {
    private connection:IDBDatabase;
    private store = ConnectionFactory.stores[0]; 
    constructor(connection:IDBDatabase) {
        this.connection = connection;
    }
    public add(todo:Pokemon){
        return new Promise((resolve,reject)=>{
            let request = this.connection
                            .transaction([this.store],'readwrite')
                            .objectStore(this.store)
                            .add(todo);
            request.onsuccess = e =>{
                resolve();
            }
            request.onerror = e =>{
                reject();
            }
        })
    }
    public getLista(){
        return new Promise<Array<Pokemon>>((resolve)=>{
            let cursor = this.connection
                            .transaction([this.store],'readwrite')
                            .objectStore(this.store)
                            .openCursor();
            let todos:Array<Pokemon> = []
            cursor.onsuccess = e =>{
                let atual = cursor.result;
                if(atual){
                    var dado = atual.value;
                    todos.push(new Pokemon(dado.type,dado.name,dado.description,dado.img))
                    atual.continue();
                }else{
                    resolve(todos)
                }
            }
        });
    }
    public getKeys(){
        return new Promise<Array<number>>((resolve)=>{
            let cursor = this.connection
                            .transaction([this.store],'readwrite')
                            .objectStore(this.store)
                            .openCursor();
            let todos:Array<number> = []
            cursor.onsuccess = e =>{
                let atual = cursor.result;
                if(atual){
                    todos.push(parseInt(atual.key.toString()))
                    atual.continue();
                }else{
                    resolve(todos)
                }
            }
        });
    }
    public delete(index:number){
        return new Promise<string>((resolve,reject)=>{
            let cursor = this.connection
                            .transaction([this.store],'readwrite')
                            .objectStore(this.store)
                            .delete(index);
            cursor.onsuccess = e =>{
                resolve("work");
            }
            cursor.onerror = e =>{
                reject("don't work");
            }
        });
    }
}