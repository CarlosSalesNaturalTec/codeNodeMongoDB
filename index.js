var MongoClient = require('mongodb').MongoClient;

var usuario = "root";
var senha = "U3aItucCpSkwWKS5";
var url = "mongodb+srv://"+ usuario + ":" + senha + "@cluster0.bvczi.mongodb.net";

MongoClient.connect(url, { useUnifiedTopology: true },  function(err, db) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Conectado!");
    }
});