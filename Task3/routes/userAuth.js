const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log("This is from user Authentication.");
    res.end("This is from user Authentication.");
})


module.exports = router;