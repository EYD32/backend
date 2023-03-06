const db = require('../data/db-config')

function getMacros(){
    return db('user')
}

function updateMacros(id, changes){
    return db('user').where({id}).update(changes)
}

module.exports = {
    getMacros,
    updateMacros
}