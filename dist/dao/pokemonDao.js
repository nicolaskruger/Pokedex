"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConnectionFactory_1 = require("../service/ConnectionFactory");
const Pokemon_1 = require("../model/Pokemon");
class pokemonDao {
    constructor(connection) {
        this.store = ConnectionFactory_1.ConnectionFactory.stores[0];
        this.connection = connection;
    }
    add(todo) {
        return new Promise((resolve, reject) => {
            let request = this.connection
                .transaction([this.store], 'readwrite')
                .objectStore(this.store)
                .add(todo);
            request.onsuccess = e => {
                resolve();
            };
            request.onerror = e => {
                reject();
            };
        });
    }
    getLista() {
        return new Promise((resolve) => {
            let cursor = this.connection
                .transaction([this.store], 'readwrite')
                .objectStore(this.store)
                .openCursor();
            let todos = [];
            cursor.onsuccess = e => {
                let atual = cursor.result;
                if (atual) {
                    var dado = atual.value;
                    todos.push(new Pokemon_1.Pokemon(dado.type, dado.name, dado.description, dado.img));
                    atual.continue();
                }
                else {
                    resolve(todos);
                }
            };
        });
    }
    getKeys() {
        return new Promise((resolve) => {
            let cursor = this.connection
                .transaction([this.store], 'readwrite')
                .objectStore(this.store)
                .openCursor();
            let todos = [];
            cursor.onsuccess = e => {
                let atual = cursor.result;
                if (atual) {
                    todos.push(parseInt(atual.key.toString()));
                    atual.continue();
                }
                else {
                    resolve(todos);
                }
            };
        });
    }
    delete(index) {
        return new Promise((resolve, reject) => {
            let cursor = this.connection
                .transaction([this.store], 'readwrite')
                .objectStore(this.store)
                .delete(index);
            cursor.onsuccess = e => {
                resolve("work");
            };
            cursor.onerror = e => {
                reject("don't work");
            };
        });
    }
}
exports.pokemonDao = pokemonDao;
//# sourceMappingURL=pokemonDao.js.map