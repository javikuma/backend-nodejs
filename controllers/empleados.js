const Empleados = require('../models/empleados');

const { getDatosPost } = require('../utils');

// @desc Obtener todos los empleados
// @ruta GET /api/empleados
async function getEmpleados( req, res ) {

    try {

        const empleados = await Empleados.mostrarTodos();
        
        res.writeHead( 200, { 'Content-Type':'application/json' } );
        res.end( JSON.stringify(
            [{
                status: true,
                empleados
            }]
        ));

    } catch (error) {
        console.log(error);
    }

}

// @desc Obtener un empleado
// @ruta GET /api/empleados/:id
async function getEmpleado( req, res, id ) {

    try {

        const empleado = await Empleados.mostrarPorId(id);

        if( !empleado ) {

            res.writeHead( 404, { 'Content-Type':'application/json' } );
            res.end( JSON.stringify(
                [{
                    status: false,
                    msg: 'No existe empleado por ese ID'
                }]
            ));

        } else {

            res.writeHead( 200, { 'Content-Type':'application/json' } );
            res.end( JSON.stringify(
                [{
                    status: true,
                    empleado
                }]
            ));

        }
        
        

    } catch (error) {
        console.log(error);
    }

}

// @desc Crear empleado
// @ruta POST /api/empleados
async function crearEmpleado( req, res ) {

    try {
        
        const body = await getDatosPost(req);

        const { nombre, apellido, rol } = JSON.parse(body);

        const empleado = {
            nombre,
            apellido,
            rol
        }

        const nuevoEmpleado = await Empleados.crear(empleado);

        res.writeHead( 201, { 'Content-Type': 'application/json'});
        return res.end( JSON.stringify(
            [{
                status: true,
                nuevoEmpleado
            }]
        ));

    } catch (error) {
        console.log(error);
    }

}




module.exports = {
    getEmpleados,
    getEmpleado,
    crearEmpleado
}