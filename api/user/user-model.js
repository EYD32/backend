const db = require('../data/db-config')

function getUser(){
    return db('user')
}
async function newUser(user){
    const newUser = await db('user').insert(user, ['user_id', 'firstName'])
    return newUser
} 



function updateUser(id, changes){
    return db('user').where({id}).update(changes)
}


module.exports = {
    getUser,
    newUser,
    updateUser
}