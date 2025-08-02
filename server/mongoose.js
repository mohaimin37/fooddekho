const mongoose = require("mongoose")
    mongoose.connect("mongodb+srv://syedanas19072002:PG1zEFJfnvQDXeG6@cluster0.qvmq1lu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("your database base has been connected")
    }).catch((err)=>{
        console.log("error data base has not been connected " + err )
    
    })

   



