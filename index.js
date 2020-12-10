const http = require('http');
const { rutasEmpleados } = require('./routes/rutasEmpleados');
const { rutasCategorias } = require('./routes/rutasCategorias');
const { rutasInventario } = require('./routes/rutasInventario');



const server = http.createServer( (req, res) => {

    if( req.url === '/api/empleados' || req.url.match(/\/api\/empleados\/([0-9a-zA-Z\-]+)/)) {

        rutasEmpleados( req, res );

    } else if( req.url === '/api/categorias' || req.url.match(/\/api\/categorias\/([0-9a-zA-Z\-]+)/)) {

        rutasCategorias( req, res );

    } else if( req.url === '/api/inventario' || req.url.match(/\/api\/inventario\/([0-9a-zA-z\-])/)) {

        rutasInventario( req, res );

    } else {

        res.writeHead( 404, { 'Content-Type':'application/json' } );
        res.end( JSON.stringify(
            [{
                status: false,
                msg: "Ruta no encontrada"
            }]
        ));

    }

});

const PORT = 4500;

server.listen( PORT, () => console.log(`Servidor corriendo en el puerto ${ PORT }`) );