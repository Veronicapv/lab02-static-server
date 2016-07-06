//http
var http = require("http");
// crear un servidor e basico 
var server = http.createServer(function (req,res){
    // aramar la respuesta
    // armar el encabezado
    res.writeHead(200,{
        "Content-Type":"text/plain",
        "Server":"ITGAM4.2.4"
    }); 
    // enviamos la respuesta
res.write("hola mundo");
// cerra la conexion
res.end();
});
//poner a trabajar al a servidor 
server.listen(3000,'127.0.0.1',function () {
    console.log("> Server listening http://localhost:3000...");
});