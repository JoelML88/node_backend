const express = require('express');
const bodyParser = require('body-parser')

const config= require('../config.js');
const user = require ('../components/user/network');
const app = express();

//ROUTER
app.use('/api/user', user)

app.listen(config.api.port, ()=>{
    console.log('Escuchanfo en el puerto ', config.api.port)
});