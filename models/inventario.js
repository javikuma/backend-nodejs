const inventario = require('../data/inventario.json');

const { v4: uuidv4 } = require('uuid');

const { escribirDatosEnJson } = require('../utils');

function mostrarTodos(){
    return new Promise( (resolve, reject ) => {
        resolve(inventario);
    });
}

function mostrarPorId(id) {
    return new Promise( (resolve, reject) => {
        const item = inventario.find( itm => itm.id === id );
        resolve( item );
    });
}

function crear(inventario1) {
    return new Promise( (resolve, reject) => {
        const nuevoInventario = { id: uuidv4(), ...inventario1 };
        inventario.push(nuevoInventario);
        escribirDatosEnJson( './data/inventario.json', inventario );
        resolve(nuevoInventario);
    });
}



module.exports = {
    mostrarTodos,
    mostrarPorId,
    crear,
}