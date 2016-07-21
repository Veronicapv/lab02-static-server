var fortunePaper ={
    "mensaje":
    "La honestidad es un regalo caro no lo esperes de gente barata"
};
module.exports={
    "getfortune" : function(cb){
        //convirtiendo el fortunePaper de objeto
        // a su version en ]String
fortunePAper = JSON.stringify(fortunePaper);
//ejecutando el callback(cb) pasandole
//como parametro el fortunePaper stringify
cb(fortunePaper);
    }
};
