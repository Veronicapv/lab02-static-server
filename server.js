//http
var http = require("http");
var fs = require('fs');
var PORT = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
if(IP=='127.0.0.1'){
    console.log(">----EJECUTANDO EN MODO LOCAL----");
}
// crear un servidor e basico 
var server = http.createServer(function (req,res){
    // aramar la respuesta
    // armar el encabezado
    res.writeHead(200,{
        "Content-Type":"text/html",
        "Server":"ITGAM4.2.4"
    }); 
    //lectura del archivo a servir
    fs.readFile('./static/index.html','utf8',function(err, content){
        if(err){
            res.write("<h1>Error de lectura</h1>");
            res.end();
        }else{
            res.write(content);
            res.end();
        }
    });
    
    // enviamos la respuesta
res.write("<h1>Luis Cruz</h1>");
// cerra la conexion
res.end();
});
//poner a trabajar al a servidor 
server.listen(3000,'192.168.1.35',function () {
    console.log("> Server listening http://localhost:3000...");
});