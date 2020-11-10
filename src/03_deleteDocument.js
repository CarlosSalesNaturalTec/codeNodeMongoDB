var MongoClient = require('mongodb').MongoClient;

var usuario = "root";
var senha = "U3aItucCpSkwWKS5";
var nomebanco = "dbmodelo";
var nomecollection = "collection_01"

var url = "mongodb+srv://"+ usuario + ":" + senha + "@cluster0.bvczi.mongodb.net";

// Insere 01 registro  (método: insertOne). Se a Collection  não existir, será criada automaticamente.
MongoClient.connect(url, { useUnifiedTopology: true },  function(err, db) {
    if (err) throw err;
    var dbo = db.db(nomebanco);
    var myquery = { name: 'Sandy' };
    dbo.collection(nomecollection).deleteOne(myquery, function(err, obj) {
        if (err) {
            throw err
        } else {
            console.log("1 document deleted");
        }
        db.close();
    });
});