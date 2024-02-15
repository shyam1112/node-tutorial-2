const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('This is get response from users. ')
})

router.post('/',(req,res)=>{
    console.log("data | Name : " +req.body.name);
    res.send(req.body);
})

module.exports = router;