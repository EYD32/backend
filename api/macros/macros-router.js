const router = require('express').Router();

const User = require('./macros-model');

router.get('/', async (req, res, next) => {
    try{
        const user = await User.getMacros();
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
})

module.exports = router;
