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
    var myobj = { sobrenome: "Sales", nome: "Carlos" };
    dbo.collection(nomecollection).insertOne(myobj, function(err, res) {
      if (err){
          console.log(err.message);
      } else {
        console.log("1 document inserted");
        db.close();
      }
    });
});

// Insere vários registros  (método: insertMany)
MongoClient.connect(url, { useUnifiedTopology: true },  function(err, db) {
    if (err) throw err;
    var dbo = db.db(nomebanco);
    var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
      ];
      dbo.collection(nomecollection).insertMany(myobj, function(err, res) {
        if (err) {
            throw err
        } else{
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        }
      });
});
