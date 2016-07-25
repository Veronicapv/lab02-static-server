function getFortuneFromServer() {
    // realizando la solicitud de get en ajax
$.get("/getfortune",function(data, status){
    console.log("> + typeof"(data));
     console.log("> estatus de respuesta" + status);
     alert(data.mensaje);
});
//alerta tu msj 
//alert("¡ Eesta es tu fortuna")
}