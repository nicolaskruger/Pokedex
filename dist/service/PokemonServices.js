"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConnectionFactory_1 = require("./ConnectionFactory");
const pokemonDao_1 = require("../dao/pokemonDao");
class PokemonServices {
    constructor() {
    }
    add(...todo) {
        return ConnectionFactory_1.ConnectionFactory
            .getConnection()
            .then(connection => new pokemonDao_1.pokemonDao(connection))
            .then(dao => todo.forEach(td => dao.add(td)));
    }
    getLista() {
        return ConnectionFactory_1.ConnectionFactory
            .getConnection()
            .then(connection => new pokemonDao_1.pokemonDao(connection))
            .then(dao => dao.getLista());
    }
    getKey() {
        return ConnectionFactory_1.ConnectionFactory
            .getConnection()
            .then(connection => new pokemonDao_1.pokemonDao(connection))
            .then(dao => dao.getKeys());
    }
    delete(index) {
        return ConnectionFactory_1.ConnectionFactory
            .getConnection()
            .then(connection => new pokemonDao_1.pokemonDao(connection))
            .then(dao => dao.delete(index));
    }
}
exports.PokemonServices = PokemonServices;
//# sourceMappingURL=PokemonServices.js.map