import {Pokemon} from "../model/Pokemon";

export class ConnectionFactory {
    static stores = ["lis"];
    private static dbName = "pokedex";
    private static version = 1;
    private static connection:IDBDatabase = null;
    static getConnection(){
        return new Promise<IDBDatabase>((resolve,reject)=>{
            let openRequest = window.indexedDB.open(ConnectionFactory.dbName,ConnectionFactory.version);
            openRequest.onupgradeneeded = e =>{
                ConnectionFactory._createStore(openRequest.result);
            };
            openRequest.onsuccess= e =>{
                if(!ConnectionFactory.connection)
                    ConnectionFactory.connection = openRequest.result;
                    resolve(ConnectionFactory.connection);
                
            }
            openRequest.onerror =  e =>{
                console.log(openRequest.error);
                resolve(null);
            };
        });
    }
    private static _createStore(connection:IDBDatabase){
        ConnectionFactory.stores.forEach(store=>{
            if(connection.objectStoreNames.contains(store)){
                connection.deleteObjectStore(store);
            }
            connection.createObjectStore(store,{autoIncrement:true});

        })
    }
    private constructor() {
        
    }
}