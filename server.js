require('dotenv').config();
const express = require('express');

const configview = require('./src/config/view')
const path = require('path')

const app = express()
const port = process.env.PORT;
const Host_Name = process.env.HOST_NAME;

app.use(express.json());
app.use(express.urlencoded());

configview(app)


require("./src/routers/api")(app)
app.listen(port, Host_Name, () => {
    console.log(`Example app listening on port ${port}`)
})