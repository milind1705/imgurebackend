const e = require('express');
const jwt = require('jsonwebtoken');
const User = require('./model')

const auth = async (req, res, next) => {
    try {

        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, req.body)
        next();

    } catch (error) {
        res.status(401).send(error);
    }
}
module.exports= auth;