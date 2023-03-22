const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('')

function tokenBuilder(user){
    const payload = {
        subject: user.user_id,
        user: user.firstName
    };
    const options = {
        expiresIn:'1d',
    };
    const token =jwt.sign(
        payload,
        JWT_SECRET,
        options
    )
    return token;
}

module.exports = {tokenBuilder}