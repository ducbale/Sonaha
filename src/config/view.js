const path = require('path')
const express = require('express')

const configview = (app) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view eng', 'ejs')

    app.use(express.static(path.join('./src', 'public')));

}

module.exports = configview;