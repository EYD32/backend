const router = require('express').Router();

const Macros = require('./macros-model');

router.get('/', async (req, res, next) => {
    try{
        const macros = await Macros.getMacros();
        res.status(200).json(macros)
    }catch(err){
        next(err)
    }
})

module.exports = router;
