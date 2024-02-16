const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://shyamsardhara1112:shyamsardhara1112@cluster0.jvomjqy.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("Database Connected");
}) .catch((err)=>(console.log(err)));