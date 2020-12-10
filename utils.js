const fs = require('fs');

function escribirDatosEnJson( nombreArchivo, contenido ) {

    fs.writeFileSync( nombreArchivo, JSON.stringify(contenido), 'utf8', (err) => {
        if (error) {
            console.log(error);
        }
    })

}


function getDatosPost( req ) {
    return new Promise( (resolve, reject) => {

        try {
            
            let body = '';

            req.on('data', (parte) => {
                body += parte.toString();
            });

            req.on('end', () => {
                resolve(body);
            });

        } catch (error) {
            reject(error);
        }

    });
}



module.exports = {
    getDatosPost,
    escribirDatosEnJson
}