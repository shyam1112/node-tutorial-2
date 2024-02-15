const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/userRout');


const app = express();
app.use(express.json());

app.use('/user',user);

app.listen(3000,()=>{
    console.log("searver listening on 3000 port.");
})


