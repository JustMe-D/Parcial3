const jwt = require("jsonwebtoken");
const config = require("../config");

const secret = config.jwt.secret;

function assignToken(data) {
return jwt.sign(data, secret);
}

function verifyToken(token) {
return jwt.verify(token, secret);
}

module.exports = {
assignToken,
verifyToken
};