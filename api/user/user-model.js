const db = require('../data/db-config')

function getUser(){
    return db('user')
}

function updateUser(id, changes){
    return db('user').where({id}).update(changes)
}

module.exports = {
    getUser,
    updateUser
}