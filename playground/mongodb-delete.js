//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch!'}).then((result) => {
  //   console.log(result);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
  //   console.log(result);
  // })
  //

  //findONeandDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })


  // db.collection('Users').deleteMany({name: "Shaw"}).then((result) => {
  //   console.log(result);
  // });
  //
  db.collection('Users').findOneAndDelete({_id: ObjectID("5c00b1f6d258ba3230438f6a")}).then((result) => {
    console.log(result);
  });
//  db.close();
 });
