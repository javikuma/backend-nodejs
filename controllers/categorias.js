const Categorias = require('../models/categorias');

const { getDatosPost } = require('../utils');

// @desc Obtener todas las categorias
// @ruta GET /api/categorias
async function getCategorias( req, res ) {

    try {

        const categorias = await Categorias.mostrarTodos();
        
        res.writeHead( 200, { 'Content-Type':'application/json' } );
        res.end( JSON.stringify(
            [{
                status: true,
                categorias
            }]
        ));

    } catch (error) {
        console.log(error);
    }

}

// @desc Obtener una categoria
// @ruta GET /api/categorias/:id
async function getCategoria( req, res, id ) {

    try {

        const categoria = await Categorias.mostrarPorId(id);

        if( !categoria ) {

            res.writeHead( 404, { 'Content-Type':'application/json'});
            res.end( JSON.stringify(
                [{
                    status: false,
                    msg: 'Categoría no encontrada por ese ID'
                }]
            ));

        } else {

            res.writeHead( 200, { 'Content-Type':'application/json' } );
            res.end( JSON.stringify(
                [{
                    status: true,
                    categoria
                }]
            ));
        }

    } catch (error) {
        console.log(error);
    }

}

// @desc Crear categoria
// @ruta POST /api/categorias
async function crearCategoria( req, res ) {

    try {
        
        const body = await getDatosPost(req);

        const { descripcion, alias } = JSON.parse(body);

        const categoria = {
            descripcion,
            alias
        }

        const nuevaCategoria = await Categorias.crear(categoria);

        res.writeHead( 201, { 'Content-Type': 'application/json'});
        return res.end( JSON.stringify(
            [{
                status: true,
                nuevaCategoria
            }]
        ));

    } catch (error) {
        console.log(error);
    }

}




module.exports = {
    getCategorias,
    getCategoria,
    crearCategoria
}