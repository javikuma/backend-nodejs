const { getInventarios, getInventario, crearInventario } = require('../controllers/inventario');


function rutasInventario( req, res) {
    if( req.url === '/api/inventario' && req.method === 'GET'){
        
        getInventarios( req, res);

    } else if( req.url.match(/\/api\/inventario\/([0-9a-zA-z\-])/) && req.method === 'GET' ){

        const id = req.url.split('/')[3];
        getInventario( req, res, id );

    } else if( req.url === '/api/inventario' && req.method === 'POST') {

        crearInventario( req, res );

    }
}



module.exports = {
    rutasInventario,
}