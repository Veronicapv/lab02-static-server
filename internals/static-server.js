//creando librerias externas para cargar los modlos necesariospara crear n servido estatico
var fs = require('fs');
config = require('../config/config.js'),
mime =require('mime');
// exportar la fincion de servidor estatico
//server hara la fncion de servir
exports.server = function name(url, res) {
    //acompletar el static-path
    var filePath = config.STATIC_PATH + url;
    //verificando si existe  o no 
    //el archivo dentro del server 
    fs.exists(filePath, function (exists) {
        if (exists) {
            //sirvo el archivo
            fs.readFile(filePath, function (err, content) {
                if (err) {
                    console.log(`>-----hubo un error  en la lectura del archivo: ${filePath}`);
                    //enviar erros 500 por error interno
                    res.writeHead(500, {
                        'Content-Type': 'text/html',
                        'Server': 'Hawks-server@2.1.2*2'
                    });
                    //eviar al usuario una respueta del tipo de error 500
                    res.end("<h1>Error 500: Recuersos Dañado </h1>");
                } else {
                    // configuramos la respuesta con "mime.list""
                    var contentType = mime.lookup(filePath);
                    //armamos respuesta  , los tipos de respesta son content type y el server
                    res.writeHead(200, {
                        'Content-Type': contentType,
                        'Server': 'Hawks-server@2.1.2*2'
                    });
                    // enviar el archivo 
                    res.end(content);
                }
            });
        } else {
            //mando un codigo 404
            res.writeHead(404,{
                'ContentType':'text/html',
                'server': 'Hawks-server@2.1.2*2'
            });
            res.end("<h1>Error 404: Recuersos no encontron </h1>");
        }
    });
  };  
