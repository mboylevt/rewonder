//index.js

const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')

// Todos
app.get('/todos', auth, getAllTodos);
app.post('/todo', auth, postOneTodo);
app.put('/todo/:todoId', auth, editTodo);
app.delete('/todo/:todoId', auth, deleteTodo);

const {
    loginUser,
    signUpUser,
    getUserDetails,
    updateUserDetails,
    uploadProfilePhoto
} = require('./APIs/users')

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto);
app.get('/user', auth, getUserDetails);
app.post('/user', auth, updateUserDetails);
exports.api = functions.https.onRequest(app);