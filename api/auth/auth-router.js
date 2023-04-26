const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { tokenBuilder } = require('./token-builder');
const Users = require('../user/user-model');
const { user } = require('pg/lib/defaults');
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
        if(bcrypt.compareSync(req.body.password, user.password)){
            // const token = tokenBuilder(user)
            res.status(200).json()
        }else{
            next({status:401, message: 'invalid credentials'})
        }
      console.log(user)
      console.log(req.body)
    }catch(err){
        next(err)
    }
})

module.exports = router;