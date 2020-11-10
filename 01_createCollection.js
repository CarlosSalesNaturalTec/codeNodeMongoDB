var MongoClient = require('mongodb').MongoClient;

var usuario = "root";
var senha = "U3aItucCpSkwWKS5";
var nomebanco = "dbmodelo";
var nomecollection = "collection_01"

var url = "mongodb+srv://"+ usuario + ":" + senha + "@cluster0.bvczi.mongodb.net";

// Se o Database não existir, será criado automaticamente, junto com a collection
MongoClient.connect(url, { useUnifiedTopology: true },  function(err, db) {
    if (err) throw err;
    var dbo = db.db(nomebanco);
    dbo.createCollection(nomecollection, function(err, res) {
      if (err) throw err;
      console.log("Database and Collection created!");
      db.close();
    });
  });