const Inventario = require('../models/inventario');

const { getDatosPost } = require('../utils');

// @desc Obtener todos los inventarios
// @ruta GET /api/inventarios
async function getInventarios( req, res ) {

    try {

        const inventario = await Inventario.mostrarTodos();
        
        res.writeHead( 200, { 'Content-Type':'application/json' } );
        res.end( JSON.stringify(
            [{
                status: true,
                inventario
            }]
        ));

    } catch (error) {
        console.log(error);
    }

}

// @desc Obtener un item del inventario
// @ruta GET /api/inventarios/:id
async function getInventario( req, res, id ) {

    try {

        const inventario = await Inventario.mostrarPorId(id);

        if ( !inventario ) {

            res.writeHead( 404, { 'Content-Type':'application/json' } );
            res.end( JSON.stringify(
                [{
                    status: false,
                    msg: 'Item del inventario no encontrado por ese ID'
                }]
            ));
            
        } else {
    
            res.writeHead( 200, { 'Content-Type':'application/json' } );
            res.end( JSON.stringify(
                [{
                    status: true,
                    inventario
                }]
            ));
        }

    } catch (error) {
        console.log(error);
    }

}

// @desc Crear inventario
// @ruta POST /api/inventarios
async function crearInventario( req, res ) {

    try {
        
        const body = await getDatosPost(req);

        const { codigo,
                numero_serie,
                descripcion,
                detalles,
                fecha_ingreso,
                id_usuario_asignado,
                fecha_asignacion,
                descripcion_adicional } = JSON.parse(body);

        const inventario = {
            codigo,
            numero_serie,
            descripcion,
            detalles,
            fecha_ingreso,
            id_usuario_asignado,
            fecha_asignacion,
            descripcion_adicional
        }

        const nuevoInventario = await Inventario.crear(inventario);

        res.writeHead( 201, { 'Content-Type': 'application/json'});
        return res.end( JSON.stringify(
            [{
                status: true,
                nuevoInventario
            }]
        ));

    } catch (error) {
        console.log(error);
    }

}




module.exports = {
    getInventarios,
    getInventario,
    crearInventario
}