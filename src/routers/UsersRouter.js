const express = require('express');

const UserRouter = express.Router();
const { postUploadSinglefile, getAllUsers, CreateUser, UpdateUser, DeleteUser } = require("../controllers/UserController")
module.exports = app => {
    UserRouter.get('/', getAllUsers);
    UserRouter.post('/', CreateUser);
    UserRouter.put('/', UpdateUser);
    UserRouter.delete('/:ID', DeleteUser)
    UserRouter.post('/file', postUploadSinglefile)
    app.use("/api/users", UserRouter);
}