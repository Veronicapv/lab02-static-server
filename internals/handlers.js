//manejadores de ruras virtuales 
var fortune = require("./fortunes");
var fechaDeNacimiento = new Date ();
module.exports = {
    "/edad/Veronica":function (req, res){ 
        res.writeHead(200,{
            "Content-Type":"aplication/json"
        });
        //armando el json
        var hoy = new Date ();
        var age= 
        Math.ceil((hoy - fechaDeNacimiento)(1000*3600*24*65))
        var objetoRespuesta ={
            "edad":age
        };
     var jsonResponce = JSON.stringify(ObjetoRespuesta) ;  
     //envio la respouesta aplication
     res.end(jsonResponse);
},
"/getfortune":function(req, res){
//var fortunePaper={
  //  "mensaje":"La honestidad es un regalo caro no lo esperes de gente barata"
//};
fortune.getFortune(function(fortunePaper){
// se configura el resultado de respuesta 
// http
res.writeHead(200,{
"content_Type": "aplication/json"
});
//parseando a string el objeto  de respuesta 
var jsonResponce = JSON.stringify(fortunePaper);
//respondemos el objeto
res.end(jsonResponse); 
});
}};