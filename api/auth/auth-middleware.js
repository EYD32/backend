const { JWT_SECRET } = require('../secrets');
const jwt = require('jsonwebtoken');
const User = require('../user/user-model');

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        next({
          status: 401,
          message: 'Invalid Token',
        });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    next({
      status: 401,
      message: 'Token Required',
    });
  }
};

const validateAccess = (user_id) => (req, res, next) => {
  if (req.decodedJwt.user_id !== user_id) {
    next({ status: 403, message: 'Access denied' });
  } else {
    next;
  }
};

const validateUser = (req, res, next) => {
  const { email, password } = req.body;
  !email || !password || email.trim() === '' || password.trim() === ''
    ? next({ status: 422, message: 'Email and Password required' })
    : (req.user = { email: email.trim(), password: password.trim() });
  next();
};

const validateCredentials = async (req, res, next) => {
  try {
    const { email } = req.body;
    const [user] = await User.getUser({ email });
    !user ? next({ status: 401, message: 'bleh' }) : (req.user = user);
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = {
  restricted,
  validateUser,
  validateCredentials,
  validateAccess
};
