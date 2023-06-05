const router = require('express').Router();

const res = require('express/lib/response');
const User = require('./user-model');
const {restricted, validateAccess} = require('../auth/auth-middleware')

router.get('/', async (req, res, next) => {
    try{
        const user = await User.getUser();
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
})

router.get('/:id',restricted, async (req, res, next) => {
    try{
        const userId = await User.getUserById(req.params.id)
        res.status(200).json(userId)
    }catch(err){
        next(err)
    }
})

router.post('/register', async (req, res, next) => {
    try{
        const newUser = await User.newUser(req.body)
        res.status(201).json(newUser)
    }catch(err){
        next(err)
    } 
}) 

router.put('/:id', async (req, res, next) => {
    try{
        const updatedUser = await User.updateUser(req.params.id, req.body)
        res.status(200).json(updatedUser)
    }catch(err){
        next(err)
    }
}) 

module.exports = router;
