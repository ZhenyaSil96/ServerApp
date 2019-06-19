const User = require('../Routes/UserRouter');
User = require('../User');

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

exports.findusergetId = function (req, res) {
    const reqId = req.params.id;
    let contact = User.filter(contact => {
        return contact.id == reqId;
    });
    if (!contact) {
        res.status(404).json({ message: 'No User found' });
    }
    res.json(contact[0]);
}

exports.findusergetName = function (req, res) {
    const reqName = req.params.first_name;
    let contact = User.filter(contact => {
        return contact.first_name == reqName;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact Name found' });
    }
    res.json(contact[0]);
}

exports.findusergetLasteName = function (req, res) {
    const reqLasteName = req.params.laste_name;
    let contact = User.filter(contact => {
        return contact.laste_name == reqLasteName;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact Laste Name found' });
    }
    res.json(contact[0]);
}

exports.findusergetEmail = function (req, res) {
    const reqEmail = req.params.email;
    let contact = User.filter(contact => {
        return contact.email == reqEmail;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact Email found' });
    }
    res.json(contact[0]);
}

exports.finduserCreate = function (req, res) {
    let contact = {
        id: User.length + 1,
        first_name: req.body.first_name,
        laste_name: req.body.laste_name,
        email: req.body.email,
        password: req.body.password
    }

    User.push(contact);
    res.json(contact);
    User.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(User);
    });
}


exports.finduserput = function (req, res) {
    const reqId = req.params.id;

    let contact = User.filter(contact => {
        return contact.id == reqId;
    })[0];

    const index = User.indexOf(contact);
    const keys = Object.keys(req.body);

    keys.forEach(key => {
        contact[key] = req.body[key];
    });
    User[index] = contact;

    res.json(User[index]);
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
    const reqId = req.params.id;
    let contact = User.filter(contact => {
        return contact.id == reqId;
    })[0];
    const index = User.indexOf(contact);
    User.splice(index, 1);
    res.json({ message: `User ${reqId} deleted.` });

    User.findByIdAndRemove(req.params.userId, (err, user) => {

        if (err) return res.status(500).send(err);
        const response = {
            message: " successfully deleted",
            id: user._id
        };
        return res.status(200).send(response);
    });

}

module.exports = User;