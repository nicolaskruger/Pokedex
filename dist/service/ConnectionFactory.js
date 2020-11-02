"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConnectionFactory {
    constructor() {
    }
    static getConnection() {
        return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open(ConnectionFactory.dbName, ConnectionFactory.version);
            openRequest.onupgradeneeded = e => {
                ConnectionFactory._createStore(openRequest.result);
            };
            openRequest.onsuccess = e => {
                if (!ConnectionFactory.connection)
                    ConnectionFactory.connection = openRequest.result;
                resolve(ConnectionFactory.connection);
            };
            openRequest.onerror = e => {
                console.log(openRequest.error);
                resolve(null);
            };
        });
    }
    static _createStore(connection) {
        ConnectionFactory.stores.forEach(store => {
            if (connection.objectStoreNames.contains(store)) {
                connection.deleteObjectStore(store);
            }
            connection.createObjectStore(store, { autoIncrement: true });
        });
    }
}
ConnectionFactory.stores = ["lis"];
ConnectionFactory.dbName = "pokedex";
ConnectionFactory.version = 1;
ConnectionFactory.connection = null;
exports.ConnectionFactory = ConnectionFactory;
//# sourceMappingURL=ConnectionFactory.js.map