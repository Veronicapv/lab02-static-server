//http
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
//obteniendo las configuraciones
// del modulo de configuraciones
var PORT = config.PORT;
var IP = config.IP;
if(IP=='127.0.0.1');{
    console.log("-------ejecutando en modo local-----");
}

var server = http.createServer(function (req,res){
    // aramar la respuesta
    // armar el encabezado
    res.writeHead(200,{
        "Content-Type":"text/html",
        "Server":"ITGAM4.2.4"
    }); 
    //lectura del archivo a servir
    fs.readFile('./static/index.html',
    'utf8',function(err, content){
        if(err){
    res.end("<h1>Error de lectura</h1>");
           
        }else{
            res.end(content);
        }
    });
});
//poner a trabajar al a servidor 
server.listen(PORT,IP,function () {
    console.log(`> Server listening http://${IP}:${PORT}...`);
});