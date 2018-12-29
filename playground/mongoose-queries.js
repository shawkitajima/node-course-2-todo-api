const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c27c956d81c5a1c0de6ae6e11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// })

// Todo.findById(id).then((todos) => {
// if (!todos) {
//   return console.log('Id not found');
// }
//   console.log('Todos:', todos);
// }).catch((e) => console.log(e));

// User.findById 3 cases

var userId = '5c05fc094f16be7c38fae896';


User.findById(userId).then((users) => {
  if (!users) {
    console.log('Id not found');
  }
  console.log(JSON.stringify(users, undefined, 2));
}).catch((e) => console.log(e));
