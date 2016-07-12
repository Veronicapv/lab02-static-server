//http
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
var colors = require ('colors');
var staticServer = require ('./internals/static-server');
//obteniendo las configuraciones
// del modulo de configuraciones
var PORT = config.PORT;
var IP = config.IP;
if(IP=='127.0.0.1');{
    console.log("-------ejecutando en modo local-----");
}

var server = http.createServer(function (req,res){
//obtener la url del archivo 
var url = req.url;
if (url =="/"){
    url = "/index.html";
}
console.log(` > URL SOLICITADA: ${url}...........`.yellow);

//sirvo la url con i server estatico 
staticServer.server(url, res);
});
//poner a trabajar al a servidor 
server.listen(PORT,IP,function () {
    console.log(`> Server listening http://${IP}:${PORT}...`);
});