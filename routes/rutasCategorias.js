const { getCategorias, getCategoria, crearCategoria } = require('../controllers/categorias');


function rutasCategorias( req, res) {
    if( req.url === '/api/categorias' && req.method === 'GET'){
        
        getCategorias( req, res);

    } else if( req.url.match(/\/api\/categorias\/([0-9a-zA-Z\-]+)/) && req.method === 'GET'){

        const id = req.url.split('/')[3];
        getCategoria(req, res, id);

    } else if( req.url === '/api/categorias' && req.method === 'POST') {

        crearCategoria( req, res );

    }
}



module.exports = {
    rutasCategorias
}