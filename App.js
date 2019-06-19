const http = require('http');
const express = require('express');
const User = require('./User');
const UserControllers = require('./Controllers/UserController');
const UserRouter = require('./Routes/UserRouter');

const cors = require('cors');
module.exports = User;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/UserController', UserControllers);
app.use('/UserRouter', UserRouter);
app.use('/User', User);

app.get('/api/User/id', UserControllers.findusergetId);
app.get('/api/User/name', UserControllers, findusergetName);
app.get('/api/User/lasteName', UserControllers.findusergetLasteName);
app.get('/api/User/email', UserControllers, findusergetEmail);

app.post('/api/User/create', UserControllers.finduserCreate);

app.put('/api/User/put', UserControllers.finduserput);

app.delete('api/User/delete', UserControllers.finduserdelete);

app.listen(8080, (err) => {
    if (err) return console.log('Error', err);
    console.log('We track the port = 8080');
});