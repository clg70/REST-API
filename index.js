const express = require('express');
const app = express();

//Routes
const home = require('./routes/home');

//DB
const mongodb = require('./database/mongodb');
mongodb();

//Model

app.use('/',home);

app.listen(3000,()=>{
    console.log(`Server is running at port 3000`);
});