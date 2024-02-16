const express = require('express');
const app = express();
app.use(express.json());
require('../db/config');
const router = require('./routes/router');

app.use('/route',router);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})