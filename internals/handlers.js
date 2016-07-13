//manejadores de ruras virtuales 
var fechaDeNacimiento = new Date (1991,10,22,1,45);
module.exports = {
    "/edad/Veronica":function (req, res){ 
        res.writeHead(200,{
            "Content-Type":"aplication/java"
        });
        //armando el json
        var hoy
        var objetoRespuesta ={
            "edad":24
        };
     var jsonResponce = JSON.stringify(ObjetoRespuesta)    
     //envio la respouesta aplication
     res.end(jsonResponse);
}

};