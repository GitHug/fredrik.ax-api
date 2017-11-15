'use strict';

exports.root = (req, res) => {
    res.json({ message: 'you did it' });
}

exports.login = (req, res) => {
    res.status(401).send({status: 401, msg: 'Login denied'});
}