const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ShawTest', (err, db) => {
  if (err) {
    return console.log('No luck, iddo');
  }


// var i;
// for (i = 0; i < 101; i++) {
//   db.collection('Value1').insertOne({
//     name: `Shaw ${i}`,
//     value: i})
// }

var j
for (j = 0; j < 101; j++) {
  db.collection('Value1').deleteOne({"value" : j});
}

db.close();
});
