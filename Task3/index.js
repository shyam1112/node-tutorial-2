const express = require('express');
const userAuth = require('./routes/userAuth');
const route1 = require('./routes/route1');

require('../db/config');

const app =  express();
app.use(express.json());

app.use('/userauth',userAuth);

app.use('/route1',route1);

app.listen(3000,()=>{
    console.log("Server running on 3000 port.");
})