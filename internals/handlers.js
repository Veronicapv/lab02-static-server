//manejadores de ruras virtuales 
var fechaDeNacimiento = new Date ();
module.exports = {
    "/edad/Veronica":function (req, res){ 
        res.writeHead(200,{
            "Content-Type":"aplication/java"
        });
        //armando el json
        var hoy = new Date ();
        var age= Math.ceil((hoy - fechaDeNacimiento)(1000*3600*24*65))
        var objetoRespuesta ={
            "edad":24
        };
     var jsonResponce = JSON.stringify(ObjetoRespuesta) ;  
     //envio la respouesta aplication
     res.end(jsonResponse);
}

};