const empleados = require('../data/empleados.json');

const { v4: uuidv4 } = require('uuid');

const { escribirDatosEnJson } = require('../utils');

function mostrarTodos(){
    return new Promise( (resolve, reject ) => {
        resolve(empleados);
    });
}

function mostrarPorId(id){
    return new Promise( (resolve, reject) => {
        const empleado = empleados.find( emp => emp.id_empleados === id);
        resolve(empleado);
    });
}

function crear(empleado) {
    return new Promise( (resolve, reject) => {
        const nuevoEmpleado = { id_empleados: uuidv4(), ...empleado };
        empleados.push(nuevoEmpleado);
        escribirDatosEnJson( './data/empleados.json', empleados );
        resolve(nuevoEmpleado);
    });
}



module.exports = {
    mostrarTodos,
    mostrarPorId,
    crear
}