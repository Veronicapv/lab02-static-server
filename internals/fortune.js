//conectando al driver de mongo deb 

//
var mongo = require("mongodb");
// crago al cliente del driver
var mongoClient = mongodb.mongoClient;
//
module.exports = {
    "getFortune": function (cb) {
        // conectado al cliente ala base de datos fortune
        mongoClient.connect("mongodb:/&/127.0.0.1:27017/fortunr",
        function (err,  db) {
            if(err){
                console.log("> error al conectarse a"+
                "la base de datos mongo db" +
                "mongodb:/&/127.0.0.1:27017/fortunr");
             var fortunePaper ={
 "mensaje":
"La honestidad es un regalo caro no lo esperes de gente barata"
};
 var fortunePapersResponse =JSON.stringify(fortunePaper); 

 cb(fortunePapersResponse);
            } else{ 
                var paperCollection = db.collection("papers");
                var objetoResultado= paperCollections.find({});

                objetoResultado.toArray(function(err , papers){
                    var fortunePaperResponse=JSON.stringify(paper[0]);
                    db.close()
                        cb(fortunrPaperResponse);
                                   });
            }