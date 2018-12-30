const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

//Todo.findOneAndRemove

//Todo.findByIdAndRemove
Todo.findOneAndRemove({_id: '5c2938e7daed600c70c955f5'}).then((todo) => {
  console.log(todo);
})


// Todo.findByIdAndRemove('5c293854daed600c70c955f4').then((todo) => {
//   console.log(todo);
// })
