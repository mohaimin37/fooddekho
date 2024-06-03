const mongoose = require("mongoose")
    mongoose.connect("mongodb+srv://syed:anas@syedanas.bg2qxhe.mongodb.net/syedanas?retryWrites=true&w=majority&appName=syedanas").then(()=>{
        console.log("your database base has been connected")
    }).catch((err)=>{
        console.log("error data base has not been connected " + err )
    
    })

   



