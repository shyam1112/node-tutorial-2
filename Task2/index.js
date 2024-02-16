const express = require('express');
const user = require('./routers/users');
require('./db/config');

const app = express();
app.use(express.json());

app.use('/user',user);

app.listen(3000,()=>{
    console.log("Server listening on port 3000 ");
})