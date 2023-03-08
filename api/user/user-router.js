const router = require('express').Router();

const User = require('./user-model');

router.get('/', async (req, res, next) => {
    try{
        const user = await User.getUser();
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
})

module.exports = router;
