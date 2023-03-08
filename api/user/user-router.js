const router = require('express').Router();

const res = require('express/lib/response');
const User = require('./user-model');

router.get('/', async (req, res, next) => {
    try{
        const user = await User.getUser();
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const newUser = await User.newUser(req.body)
        res.status(201).json(newUser)
    }catch(err){
        next(err)
    }
})

module.exports = router;
