require('dotenv').config();
const express = require('express');

const configview = require('./config/view')
const path = require('path')
const connection = require('./config/db')

const app = express()
const port = process.env.PORT;
const Host_Name = process.env.HOST_NAME;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configview(app);

require("./routers/api")(app);



(async () => {
    try {
        await connection();
        app.listen(port, Host_Name, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(' >>> error connect to db', error);
    }
})()

