const express = require('express');
const router = express.Router();
const Users = require('../../db/userSchema');

router.get('/',(req,res)=>{
    res.send("This is get request from users.")
})

router.post('/add',async (req,res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
})

router.put('/update/:id',async(req,res)=>{

    let userupdate = await Users.updateOne(
        {_id:req.params.id},{
            $set:req.body
        }
    )
    if(userupdate){
        console.log("Updated Database.");
    }
    res.send(userupdate);
})

module.exports = router;