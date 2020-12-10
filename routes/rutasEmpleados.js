const { getEmpleados, getEmpleado, crearEmpleado } = require('../controllers/empleados');

function rutasEmpleados( req, res) {

    if( req.url === '/api/empleados' && req.method === 'GET'){
        
        getEmpleados( req, res );

    } else if( req.url.match(/\/api\/empleados\/([0-9a-zA-Z\-]+)/) && req.method === 'GET' ){

        const id = req.url.split('/')[3];
        getEmpleado( req, res, id );

    } else if( req.url === '/api/empleados' && req.method === 'POST' ) {

        crearEmpleado( req, res );

    }

}



module.exports = {
    rutasEmpleados,
}