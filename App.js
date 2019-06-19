const http = require('http');
const express = require('express');
const User = require('./User');
const UserControllers = require('./Controllers/UserController');
//const ContactsControll = require('./Controllers/ContactsController');
//const ContactsRouter = require('./Routes/ContactsRouter');
const UserRouter = require('./Routes/UserRouter');
//const catalogRouter = require('./routes/catalog');



const cors = require('cors');

//module.exports = contacts;
module.exports = User;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/UserController', UserControllers);
app.use('/UserRouter', UserRouter);
app.use('/User', User);

app.get('/api/User/get', UserControllers.finduserget);

//app.get('/api/contacts', ContactsControll.all);

//app.get('/api/contacts/:id', ContactsControll.findById);

//app.get('/api/contacts/:first_name', ContactsControll.findByFirstName);

//app.get('/api/contacts/:laste_name', ContactsControll.findByLasteName);

//app.get('/api/contacts/:email', ContactsControll.findByEmail);

//app.post('/api/contacts', ContactsControll.create);

app.post('/api/User/post', UserControllers.finduserpost);

//app.put('/api/contacts/:id', ContactsControll.update);

app.put('/api/User/put', UserControllers.finduserput);

//app.delete('/api/contacts/:id', ContactsControll.delete);

app.delete('api/User/delete', UserControllers.finduserdelete);

app.listen(8080, (err) => {
    if (err) return console.log('Error', err);
    console.log('We track the port = 8080');
});