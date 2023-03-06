const db = require('../data/db-config')

function getMacros(){
    return db('macros')
}

function updateMacros(id, changes){
    return db('macros').where({id}).update(changes)
}

module.exports = {
    getMacros,
    updateMacros
}