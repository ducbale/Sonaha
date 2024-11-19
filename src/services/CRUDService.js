const connection = require("../config/db")
const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users u');
    return results;
}
const getUserById = async (userId) => {
    let [results] = await connection.query('select * from Users where id = ?', [userId])
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const updateUser = async (email, name, city, Userid) => {

    let [results] = await connection.query(
        `UPDATE  Users 
         SET email =? , name=?, city=?
         Where id=?`, [email, name, city, Userid]
    );
}
const deleteUser = async (Userid) => {

    let [results] = await connection.query(
        `DELETE FROM Users WHERE id = ?;`
        , [Userid]
    );
}
module.exports = {
    getAllUsers, getUserById,
    updateUser, deleteUser
}