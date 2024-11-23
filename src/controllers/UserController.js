const Users = require("../models/user")
const getAllUsers = async (req, res) => {
    let results = await Users.find({});

    return res.status(200).json({

        errorCode: 0,
        data: results

    })
}
const CreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let user = await Users.create({
        email,
        name,
        city
    });
    return res.status(200).json({

        errorCode: 0,
        data: user

    })
}
const UpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userID = req.body.Userid;
    let user = await Users.updateOne({ _id: userID }, { email: email, name: name, city: city });
    return res.status(200).json({

        errorCode: 0,
        data: user

    })
}
const DeleteUser = async (req, res) => {
    let userID = req.params.ID;
    let user = await Users.deleteOne({ _id: userID });
    return res.status(200).json({

        errorCode: 0,
        data: user

    })
}
const postUploadSinglefile = async (req, res) => {
    return res.send("dsadsa");
}
module.exports = {
    postUploadSinglefile, getAllUsers, CreateUser, UpdateUser, DeleteUser
}