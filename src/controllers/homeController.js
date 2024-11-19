const connection = require("../config/db")
const { getAllUsers, getUserById, updateUser, deleteUser } = require("../services/CRUDService")
const getHomepage = (req, res) => {
    let users = [];

    connection.query(
        'select* from Users u',
        function (err, result, fields) {
            users = result;
            console.log('result = ', result);
            res.send(JSON.stringify(users))
        }
    )
}

const duc = (req, res) => {
    res.render('sample.ejs')
}

const home = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)  VALUES (?, ?, ?)`, [email, name, city]
    );
    res.redirect("/home");
}
const getcreate = (req, res) => {
    res.render('create.ejs')
}
const getupdate = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', { userEdit: user });
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userID = req.body.Userid;
    await updateUser(email, name, city, userID)
    //res.send("updated user success");
    res.redirect("/home");
}
const postDeleteUser = async (req, res) => {
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    // let userID = req.body.Userid;
    // await updateUser(email, name, city, userID)
    // //res.send("updated user success");
    // res.redirect("/home");
    const userID = req.params.id;
    let user = await getUserById(userID);
    res.render('delete.ejs', { userEdit: user });
}
const postUserDel = async (req, res) => {
    let userID = req.body.Userid;
    await deleteUser(userID);
    console.log("fdsagdsg");
    res.redirect("/home");
}
module.exports = {
    postUserDel, postDeleteUser, getupdate, postUpdateUser, getHomepage, duc, home, postCreateUser, getcreate
}