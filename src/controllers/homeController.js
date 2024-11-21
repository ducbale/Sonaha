const connection = require("../config/db")
const { getAllUsers, getUserById, updateUser, deleteUser } = require("../services/CRUDService")
const User = require('../models/user');
const { model } = require("mongoose");

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
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results })
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(email, '--', city, ' ', name)
    await User.create({
        email,
        name,
        city
    });
    res.redirect("/home");
}
const getcreate = (req, res) => {
    res.render('create.ejs')
}
const getupdate = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId);
    res.render('edit.ejs', { userEdit: user });
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userID = req.body.Userid;
    await User.updateOne({ _id: userID }, { email: email, name: name, city: city });
    //res.send("updated user success");
    res.redirect("/home");
}
const postDeleteUser = async (req, res) => {
    const userID = req.params.id;
    let user = await User.findById(userID);
    res.render('delete.ejs', { userEdit: user });
}
const postUserDel = async (req, res) => {
    let userID = req.body.Userid;
    await User.deleteOne({ _id: userID });
    console.log("fdsagdsg");
    res.redirect("/home");
}
module.exports = {
    postUserDel, postDeleteUser, getupdate, postUpdateUser, getHomepage, duc, home, postCreateUser, getcreate
}