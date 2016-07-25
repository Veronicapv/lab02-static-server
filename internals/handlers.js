//manejadores de ruras virtuales 
var fortune = require("./fortune");

var fechaDeNacimiento = new Date (1981,10,22,1,45);
module.exports = {
    "/edad/Veronica":function (req, res){ 
        //@@19+20+21,22 mudule exports={}
        res.writeHead(200,{
            "Content_Type":"application/json"
        });
        //calculo la edad
         var hoy = new Date();
         var age = 
         Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365))
         // Armando el json
         var objetoRespuesta = {
             "edad" : age
         };
         var jsonResponse = 
         JSON.stringify(objetoRespuesta);
         // Envio la respuesta al cliente
          res.end(jsonResponse); 
},
"/getfortune":function(req, res){
    console.log(">Se solicita fortuna...");
//se optiene el msj de la serte
//var fortunePaper={
  // "mensaje":"La honestidad es un regalo caro no lo esperes de gente barata"
//};
// se configura el resultado de respuesta 
// http
//res.writeHead(200,{
//"Content_Type": "application/json"
//});
// se optiene el msj de la suerte 
//var fortune paper
//"mensaje "
// la amistad es una regalo caro y no lo esperes de gente barata 
//};
//parseando a string el objetoRespuesta
fortune.getFortune(function(fortunePaper){
             // Se configura el encabezado de respuesta
             // HTTP
            res.writeHead(200,{
                 "Content-Type" : "application/json"
                  });
    res.end(fortuneResponse);
});
}
};