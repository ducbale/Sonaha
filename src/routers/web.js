const express = require('express');
const { postUserDel, postDeleteUser, getHomepage, postUpdateUser, duc, home, getupdate, postCreateUser, getcreate } = require("../controllers/homeController")
const router = express.Router();

module.exports = app => {
    router.get("/db", getHomepage);
    router.get("/", duc);


    router.get("/home", home)

    router.post("/create_user", postCreateUser)
    router.post("/update_user", postUpdateUser)
    router.post("/delete_user/:id", postDeleteUser)
    router.post("/delete", postUserDel)
    router.get("/create", getcreate)
    router.get("/update/:id", getupdate)

    app.use("", router);
}