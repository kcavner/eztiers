const jwt = require('jsonwebtoken');


const secret = 'biiiiiiiggggggsecrettt';
const expiration = '3h';

module.exports = {
    signToken: function ({ _id }) {
        const payload = {_id};
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};