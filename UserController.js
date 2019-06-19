const User = require('../Routes/UserRouter');
User = require('../User');
// User.create({ name: "Alex", lasteName: "Alixac", email: "alixac@gmail.com", password: 005 }, function (err, doc) {
//     if (err) return console.log(err);

//     console.log("Save object user", doc);
// });
// User.create({ name: "Jorsh", lasteName: "Abromovich", email: "abrom@gmail.com", password: 972 }, function (err, doc) {
//     if (err) return console.log(err);
//     console.log("Save Jorsh", doc);
// });
exports.finduserget = function (req, res) {
    User.find((err, doc) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(doc);
    });
    User.find({ name: "Bob", laste_name: "Bobrush", email: "bobrush@gmail.com", password: "2008" }, (err, doc) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(doc);
    });
    res.send('NOT IMPLEMENTED: Author create GET');
}

exports.finduserpost = function (req, res) {
    const User = new Users(req.body);
    User.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(User);
    });
}

exports.finduserput = function (req, res) {
    User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true },
        (err, userId) => {

            if (err) return res.status(500).send(err);
            return res.send(userId);
        }
    );
}
exports.finduserdelete = function (req, res) {
    User.findByIdAndRemove(req.params.userId, (err, user) => {

        if (err) return res.status(500).send(err);
        const response = {
            message: " successfully deleted",
            id: user._id
        };
        return res.status(200).send(response);
    });
}