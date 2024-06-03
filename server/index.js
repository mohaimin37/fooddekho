const express = require('express')
const app = express()
const cors = require("cors")



const model = require("./mongoose.js")
const data = require("../database/fooddata.js")
const api = require("../database/fooddata2.js")
const mycart = require("../database/mycart.js")
app.use(express.urlencoded({extended:false}))

app.use(cors())
app.use(express.json())
app.use(require("./routes.js"))
app.use(require("./register.js"))
app.use(require("./json.js"))
app.use(require("./json2.js"))
app.use(require("./cart.js"))
require("./mongoose.js")

const PORT = process.env.PORT || 8000;



app.listen(PORT,()=>{
    console.log("you get connected to localhost:8000")
})