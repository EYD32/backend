const db = require('../data/db-config')

async function getUser(){
    return db('user')
}
async function newUser(user){
    const newUser = await db('user').insert(user, ['user_id', 'firstName'])
    return newUser
} 

async function getUserById(user_id){
    return db('user').where({ user_id }).first();
}

async function updateUser(id, changes){
    return db('user').where({id}).update(changes)
}


module.exports = {
    getUser,
    getUserById,
    newUser,
    updateUser
}