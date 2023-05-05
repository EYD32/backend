const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { tokenBuilder } = require('./token-builder');
const Users = require('../user/user-model');
const {validateUser,validateCredentials} = require('./auth-middleware')

router.post('/register', async (req, res, next) => {
  try {
      let user = req.body
    const rounds = Number(process.env.BCRYPT_ROUNDS) || 8;
    const hash = bcrypt.hashSync(user.password, rounds);
    
    user.password = hash;
    
    const newUser = await Users.newUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post('/login', validateCredentials,  async  (req, res, next) => {
    try{
        let user = req.user;
        let userId = req.user.user_id
        if(bcrypt.compareSync(req.body.password, user.password)){
            const token = tokenBuilder(user)
            res.status(200).json( {message: 'Argen Blargen Mr Margen', token, userId})
        }else{
            next({status:401, message: 'invalid credentials'})
        }
    }catch(err){
        next(err)
    }
})

module.exports = router;