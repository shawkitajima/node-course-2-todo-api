//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5c01eb9b41edf31cb0bff87a')}, {
//   $set: {
//     completed: true}
//   }, {returnOriginal: false}
// ).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5c009c9164a3cd16dcc4c070')
}, {
  $set: {
    name: 'Shaw'
  },
  $inc: {
    age: 1}
  }, {returnOriginal: false
}).then((result) => {
  console.log(result);
});


//  db.close();
 });
