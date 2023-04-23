const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { tokenBuilder } = require('./token-builder');
const Users = require('../user/user-model');
const { user } = require('pg/lib/defaults');

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

router.post('/login', async (req, res, next) => {
    try{
        let {firstName, password} = req.user;
        if(bcrypt.compareSync(req.body.password, password)){
            const token = tokenBuilder(user)
            res.status(200).json({ message: `Welcome back, ${firstName}`})
        }else{
            next({status:401, message: 'invalid credentials'})
        }

    }catch(err){
        next(err)
    }
})

module.exports = router;