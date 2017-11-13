'use strict';

exports.root = (req, res) => {
    res.json({ message: 'you did it' });
}

exports.login = (req, res) => {
    console.log('login');
    res.json({ message: 'Hello login' });
}