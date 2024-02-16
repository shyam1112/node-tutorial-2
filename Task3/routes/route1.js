const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();

let auth = false;

app.use((req,res,next)=>{
    console.log("App.use");
    next()
})

router.get('/',async (req,res,next)=>{
    if (checkAuth()) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
},(req,res)=>{
    res.end("Authorized");
})

function checkAuth(){
    return auth;
}


module.exports = router;