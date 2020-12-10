const categorias = require('../data/categorias.json');

const { v4: uuidv4 } = require('uuid');

const { escribirDatosEnJson } = require('../utils');

function mostrarTodos(){
    return new Promise( (resolve, reject ) => {
        resolve(categorias);
    });
}

function mostrarPorId(id) {
    return new Promise( (resolve, reject) => {
        const categoria = categorias.find( cat => cat.id_categoria === id);
        resolve(categoria);
    });
}

function crear(categoria) {
    return new Promise( (resolve, reject) => {
        const nuevaCategoria = { id_categoria: uuidv4(), ...categoria };
        categorias.push(nuevaCategoria);
        escribirDatosEnJson( './data/categorias.json', categorias );
        resolve(nuevaCategoria);
    });
}



module.exports = {
    mostrarTodos,
    mostrarPorId,
    crear,
}