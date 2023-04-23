const { JWT_SECRET } = require('../secrets')
const jwt =require('jsonwebtoken')
const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err){
                next({
                    status:401,
                    message: 'Invalid Token'
                })
            } else {
                req.decodedJwt = decoded;
                next()
            }
        })
    } else {
        next({
            status: 401,
            message: 'Token Required'
        })
    }
}