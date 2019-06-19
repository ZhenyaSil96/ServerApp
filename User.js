const mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/serverdb');

let authorShema = new Schema({
    name: String,
    lasteName: String,
    email: String,
    password: Number,
});

let User = mongoose.model('User', authorShema);


