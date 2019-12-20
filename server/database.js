const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const generateToken = email =>
    jwt.sign({ email }, 'jwtSecret', {
        expiresIn: 60 * 60 * 72
    });


const db = new Sequelize('users_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const users = db.define('users', {
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})

router.post('/auth-check', (req, res) => {
    jwt.verify(req.body.token, 'jwtSecret', err => {
        return err ?
            res.json({ success: false }) :
            res.json({ success: true });
    })
});

router.post('/login', (req, res) => {
    users
        .findOne({ where: { email: req.body.email } })
        .then(item => {
            item && item.password === req.body.password ?
                res.json({ token: generateToken(req.body.email), success: true }) :
                res.json({ success: false })
        })
        .catch(err => res.json({ success: false }));
});

router.post('/register', (req, res) => {
    users
        .create({
            email: req.body.email,
            password: req.body.password
        })
        .then(data => res.json({ token: generateToken(req.body.email), success: true }))
        .catch(err => res.json({ success: false }));
});

module.exports = { db, router };